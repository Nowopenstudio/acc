import { createClient } from "@sanity/client"

const projectId = 's5xfrh13'
const dataset = 'production'
const apiVersion = '2023-01-01'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true
})