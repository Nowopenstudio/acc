import { createClient } from "@sanity/client"

const projectId = 's5xfrh13'
const dataset = 'production'

export const client = createClient({
    projectId,
    dataset,
    useCdn: false
})