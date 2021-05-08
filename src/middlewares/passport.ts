import { Strategy, StrategyOptions, ExtractJwt } from 'passport-jwt'
import config from '../config'
import User from '../models/user'

const options:StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt.secret
}

export default new Strategy(options, async (payload, done) => {
    console.log({email: payload.email})
    const user = await User.findOne({email: payload.email})
    if(!user) {
        return done(null, false)
    }

    return done(null, user)
})