import { AlgoHandler } from '../types'

export const handler: AlgoHandler = {
  uri: 'at://did:plc:xnifeduuc7fmgwz7aodg52zq/app.bsky.feed.generator/superleague',
  name: 'Super League Feed',
  description: 'Posts with #SLFF3, #SuperLeague, or from @fantasynowplus.com',
  filter: (post) => {
    const text = post.text.toLowerCase()
    return (
      text.includes('#slff3') ||
      text.includes('#superleague') ||
      post.author.handle === 'fantasynowplus.com'
    )
  },
}
