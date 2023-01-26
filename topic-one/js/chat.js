const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;

console.log(`Can i open the chat ? `, canOpenChat);
