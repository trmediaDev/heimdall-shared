/// Asset Variation

export class ImageVariantsObject {
    filename: string;
    key: string;
    width: number;
    height: number;
}

export class Variants {
    thumb_xs?: ImageVariantsObject;
    thumb?: ImageVariantsObject;
    xs?: ImageVariantsObject;
    s?: ImageVariantsObject;
    s2?: ImageVariantsObject;
    s3?: ImageVariantsObject;
    s4?: ImageVariantsObject;
    s5?: ImageVariantsObject;
}

export const imageVariantOptions = [
    {
        name: 'thumb_xs',
        width: 150,
    },
    {
        name: 'thumb',
        width: 200,
    },
    {
        name: 'xs',
        width: 400,
    },
    {
        name: 's',
        width: 800,
    },
    {
        name: 's2',
        width: 1600,
    },
    {
        name: 's3',
        width: 2400,
    },
    {
        name: 's4',
        width: 3000,
    },
    {
        name: 's5',
        width: 3840,
    },
];
