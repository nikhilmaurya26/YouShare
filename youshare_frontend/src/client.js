import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'pwpcdb91',
    dataset: 'production',
    apiVersion: "2022-02-03",
    useCdn: true,
    token: 'skhh9VCM6tHLZjS1DUYK3MqW2UDVJ8w1n6DqWh4nzBpXIu1Tt1qT70L7nZHGdWobPDumDykoq7W1FvCIsDATQYgkzJo7C8Gx3jq3KSBPXhTIMOKpOfOcBE05W9ryOIZVnEYmW6Wj2421UwW0UoI24lSurwBr0JBdTQeH521NbjooB7ls4RKv',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);