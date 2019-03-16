const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const Profile = require('../models/Profile')
const User = require('../models/User')
const profileValidation = require('../validation/profile')
const expericeneValidation = require('../validation/experience')
const educationValidation = require('../validation/education')
const router = express.Router()

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

//@route GET api/profile/test
//@desc Tests user Route
//@access Public
// router.get('/', (req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json')
//     res.json({ msg: 'Working Sucessfully' })
// })


//@route GET api/profile/all
//@desc get profile by handle
//@access public
router.get('/all', (req, res) => {
    const errors = {}
    Profile.find()
        .populate('user', ['name', 'profilepicture'])
        .then(profiles => {
            if (!profiles) {
                errors.noProfile = 'There are no profiles'
                return res.status(404).json(errors)
            }
            res.status(200).json(profiles)
        }).catch(err => res.status(400).json(err))
})


//@route GET api/profile/handle/:handle
//@desc get profile by handle
//@access public
router.get('/handle/:handle', (req, res) => {
    const errors = {}
    Profile.findOne({ handle: req.params.handle })
        .populate('user', ['name', 'profilepicture'])
        .then(profile => {
            if (!profile) {
                errors.noProfile = 'profile does not exists'
                return res.status(404).json(errors)
            }
            res.status(200).json(profile)
        }).catch(err => res.status(400).json(err))
})

//@route GET api/profile/user/:user_id
//@desc get profile by handle
//@access public
router.get('/user/:userId', (req, res) => {
    const errors = {}
    Profile.findOne({ user: req.params.userId })
        .populate('user', ['name', 'profilepicture'])
        .then(profile => {
            if (!profile) {
                errors.noProfile = 'profile does not exists'
                return res.status(404).json(errors)
            }
            res.status(200).json(profile)
        }).catch(err => res.status(400).json(err))
})

//@route GET api/profile
//@desc Current User
//@access Private
router.get('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const errors = {}
        Profile.findOne({ user: req.user.id })
            .populate('user', ['name', 'profilepicture'])
            .then(profile => {
                errors.noProfile = 'No profile for this user'
                if (!profile) { return res.status(404).json(errors) }
                return res.status(200).json(profile)
            })
            .catch(err => res.status(404).json(err))
    })

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = profileValidation(req.body);
        // Check Validation
        if (!isValid) {
            // Return any errors with 400 status
            return res.status(400).json(errors);
        }
        // Get fields
        const profileFields = {};
        profileFields.user = req.user.id;
        if (req.body.handle) profileFields.handle = req.body.handle;
        if (req.body.company) profileFields.company = req.body.company;
        if (req.body.website) profileFields.website = req.body.website;
        if (req.body.location) profileFields.location = req.body.location;
        if (req.body.bio) profileFields.bio = req.body.bio;
        if (req.body.status) profileFields.status = req.body.status;
        if (req.body.githubusername)
            profileFields.githubusername = req.body.githubusername;
        // Skills - Spilt into array
        if (typeof req.body.skills !== 'undefined') {
            profileFields.skills = req.body.skills.split(',');
        }
        // Social
        profileFields.social = {};
        if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
        if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
        if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
        if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
        if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

        Profile.findOne({ user: req.user.id }).then(profile => {
            if (profile) {
                // Update
                Profile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileFields },
                    { new: true }
                ).then(profile => res.json(profile));
            } else {
                // Create

                // Check if handle exists
                Profile.findOne({ handle: profileFields.handle }).then(profile => {
                    if (profile) {
                        errors.handle = 'That handle already exists';
                        res.status(400).json(errors);
                    }

                    // Save Profile
                    new Profile(profileFields).save().then(profile => res.json(profile));
                });
            }
        });
    });

// @route   POST api/profile/experience
// @desc    Add Experience
// @access  Private
router.post(
    '/experience',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = expericeneValidation(req.body)
        if (isValid == false) {
            return res.status(400).json(errors)
        }
        Profile.findOne({ user: req.user.id }).then(profile => {
            const profileExp = {
                title: req.body.title,
                company: req.body.company,
                location: req.body.location,
                from: req.body.from,
                to: req.body.to,
                current: req.body.current,
                description: req.body.description,
            }
            //Add expericene to the profile
            profile.experience.unshift(profileExp)
            //Save after adding experience
            profile.save().then(profile => res.status(200).json(profile))
        })
    })

// @route   POST api/profile/education
// @desc    Add Education
// @access  Private
router.post(
    '/education',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = educationValidation(req.body)
        if (isValid == false) {
            return res.status(400).json(errors)
        }
        Profile.findOne({ user: req.user.id }).then(profile => {
            const profileEdu = {
                school: req.body.school,
                degree: req.body.degree,
                fieldofstudy: req.body.fieldofstudy,
                from: req.body.from,
                to: req.body.to,
                current: req.body.current,
                description: req.body.description
            }
            //Add expericene to the profile
            profile.education.unshift(profileEdu)
            //Save after adding experience
            profile.save().then(profile => res.status(200).json(profile))
        })
    })
    
// @route   POST api/profile/experience/expId
// @desc    delete Experience
// @access  Private
router.delete(
    '/experience/:expId',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Profile.findOne({ user: req.user.id })
            .then(profile => {
                //Get remove index
                const index = profile.experience
                    .map(item => item.id)
                    .indexOf(req.params.expId)
                //Remove experience from the profile
                profile.experience.splice(index, 1)
                profile.save().then(profile => res.status(200).json(profile))
            })
            .catch(err => res.status(400).json(err))
    })

// @route   DELETE api/profile/education/:edu_id
// @desc    Delete education from profile
// @access  Private
router.delete(
    '/education/:eduId',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Profile.findOne({ user: req.user.id })
            .then(profile => {
                // Get remove index
                const removeIndex = profile.education
                    .map(item => item.id)
                    .indexOf(req.params.eduId);

                // Splice out of array
                profile.education.splice(removeIndex, 1);

                // Save
                profile.save().then(profile => res.json(profile));
            })
            .catch(err => res.status(404).json(err));
    }
);

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Profile.findOneAndRemove({ user: req.user.id }).then(() => {
            User.findOneAndRemove({ _id: req.user.id }).then(() =>
                res.json({ success: true })
            );
        });
    }
);

module.exports = router