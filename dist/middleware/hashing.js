"use strict";
// import { NextFunction, Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
// import * as bcrypt from 'bcrypt';
// import {user_s}  from '../models/user';
// user.pre<user_schyhema>('save', async function (next) {
//     try {
//       if (!this.isModified('password')) {
//         return next();
//       }
//       const saltRounds = 10;
//       const salt = await bcrypt.genSalt(saltRounds);
//       this.password = await bcrypt.hash(this.password.toString(), salt);  // Convert String to primitive string
//       next();
//     } catch (error) {
//       next();
//     }
//   });
