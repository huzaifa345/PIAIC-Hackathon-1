
let validate = (rule: any, min: number = 0, max: number = 0) => {
    if (min && max) {
        return rule.required().min(min).max(max).warning('A title is required of 5 to 80 charecters')
    }
    else {
        return rule.required()
    }

}

export const product = {
    name: 'product',
    type: 'document',
    title: 'product',
    fields: [
        {
            name: 'title',
            title: 'Product Title',
            type: 'string',
            validation: (Rule: any) => validate(Rule, 5, 80)
        },
        {
            name: 'description',
            title: 'Product Description',
            type: 'string',
            validation: (Rule: any) => validate(Rule)
        },
        {
            name: 'image',
            title: 'Product Image',
            type: 'image',
            validation: (Rule: any) => validate(Rule)

        },
        {
            name: 'moreImages',
            title: 'Product Image',
            type: 'array',
            of : [
                {
                    type : 'image',
                    name : 'product detail images'
                }
            ],
            validation: (Rule: any) => Rule.min(3).max(3) 

        },
        {
            name: 'price',
            title: 'product price',
            type: 'number',
            validation: (Rule: any) => validate(Rule)

        },
        {
            name: 'category',
            title: 'product category',
            type: 'string',
            options: {
                list: [
                    { title: 'male', value: 'male' },
                    { title: 'female', value: 'female' },
                    { title: 'kids', value: 'kids' },
                ],
                layout: 'select' 
            },
            validation: (Rule: any) => validate(Rule)

        }

    ]
}