const { authOptions } = require("@/utils/authOptions");
const { default: nextAuth } = require("next-auth");
const { NextAuth } = require("next-auth/next");

const handler = nextAuth(authOptions);
export { handler as GET, handler as POST }