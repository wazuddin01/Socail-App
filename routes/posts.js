const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const Post = require('../models/Post')
const Profile = require('../models/Profile')
const postValidation = require('../validation/post')
const router = express.Router()

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

//@route POST api/posts
//@desc Create Post
//@access Private
router.post(
    '/', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = postValidation(req.body)
        if (isValid == false) {
            return res.status(400).json(errors)
        }
        const newPost = new Post({
            name: req.body.name,
            text: req.body.text,
            avatar: req.body.avatar,
            user: req.user.id
        })
        newPost.save().then(post => res.status(200).json(post))
    })

//@route GET api/posts
//@desc Create Post
//@access Public
router.get('/', (req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ PostsNotFound: 'No post found' }))
})

//@route POST api/posts/postId
//@desc Get Post by Id
//@access Public
router.get('/:postId', (req, res) => {
    Post.findById(req.params.postId)
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({ PostsNotFound: 'No post found' }))
})

//@route DELETE api/posts/postId
//@desc Create Post
//@access Private
router.delete('/:postId',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Profile.findOne({ user: req.user.id })
            .then(profile => {
                Post.findById(req.params.postId).then(post => {
                    //if post is created by user then it can delete
                    if (post.user.toString() != req.user.id) {
                        return res.status(401).json({ Unauthorize: 'User is unauthorize to delete this' })
                    }
                    //Delete the post
                    post.remove().then(() => res.json({ success: true }))
                })
            }).catch(err => res.json({ NotFound: 'Post not found' }))
    })

//@route POST api/posts/like/:likeId
//@desc Like Post
//@access Private
router.post(
    '/like/:likeId',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Profile.findOne({ user: req.user.id }).then(profile => {
            Post.findById(req.params.likeId)
                .then(post => {
                    if (
                        post.likes.filter(like => like.user.toString() === req.user.id).length > 0
                    ) {
                        return res.
                            status(400)
                            .json({ alreadyliked: 'User already liked this post' })
                    }
                    // Add user id to likes array
                    post.likes.unshift({ user: req.user.id })
                    post.save().then(post => res.json(post))
                })
                .catch(err => res.status(404).json({ postnotfound: 'No post found' }))
        })
    })

//@route POST api/posts/unlike/:likeId
//@desc Unlike Post
//@access Private
router.post(
    '/unlike/:unId',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Profile.findOne({ user: req.user.id }).then(profile => {
            Post.findById(req.params.unId)
                .then(post => {
                    if (
                        post.likes.filter(like => like.user.toString() === req.user.id)
                            .length === 0
                    ) {
                        return res.
                            status(400)
                            .json({ notLiked: 'First Like the Post' })
                    }
                    //getting Remove index
                    const index = post.likes
                        .map(item => item.user.toString())
                        .indexOf(req.user.id)

                    //Unlike the Post
                    post.likes.splice(index, 1)

                    //Saving the post
                    post.save().then(post => res.json(post))
                })
                .catch(err => res.status(404).json({ postnotfound: 'No post found' }))
        })
    })

// @route   POST api/posts/comment/:id
// @desc    Add comment to post
// @access  Private
router.post(
    '/comment/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = postValidation(req.body);
        // Check Validation
        if (!isValid) {
            // If any errors, send 400 with errors object
            return res.status(400).json(errors)
        }
        Post.findById(req.params.id)
            .then(post => {
                const newComment = {
                    text: req.body.text,
                    name: req.body.name,
                    avatar: req.body.avatar,
                    user: req.user.id
                }
                // Add to comments array
                post.comments.unshift(newComment)

                // Save
                post.save().then(post => res.json(post))
            })
            .catch(err => res.status(404).json({ postnotfound: 'No post found' }))
    })

// router.delete('/comment/:postId/:commentId',
//     passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//         console.log(req.params.postId)
//         console.log(req.params.commentId)
//     })

// @route   DELETE api/posts/comment/:id/:commentId
// @desc    Remove comment from post
// @access  Private
router.delete(
    '/comment/:postId/:comment_id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        Post.findById(req.params.postId)
            .then(post => {

                if (
                    post.comments.filter(
                        comment => comment._id.toString() === req.params.comment_id
                    ).length === 0
                ) {
                    return res
                        .status(404)
                        .json({ commentnotexists: 'Comment does not exist' });
                }

                const removeIndex = post.comments
                    .map(item => item._id.toString())
                    .indexOf(req.params.comment_id);


                post.comments.splice(removeIndex, 1);

                post.save().then(() => res.json({ 'success': true }));
            })
            .catch(err => res.status(404).json({ postnotfound: 'No post found' }));
    }
);

module.exports = router