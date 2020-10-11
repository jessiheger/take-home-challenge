export const FormFields = [
    {
        label: 'First Name',
        name: 'firstName',
        placeholder: 'Jane',
        required : true,
        value: /^$|\s+/,
        message: 'Please provide first name.'
    },
    {
        label : 'Last Name',
        name: 'lastName',
        required: true,
        value: /^$|\s+/,
        message: 'Please provide last name.'
    },
    {
        label: 'Email Address',
        required: true,
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address.'
    },
    {
        label: 'Address',
        required: true,
        value: /[^A-Za-z0-9-( )]+/,
        message: 'Invalid street address. Please use only numbers, letters, spaces, and dashes (-).',
    },
    {
        label: 'Address (Optional)',
        required: false,
        value: /[^A-Za-z0-9-( )]+/,
        message: 'Invalid street address. Please use only numbers, letters, spaces, and dashes (-).',
    },
    {
        label: 'City',
        required: true,
        value: /[^A-Za-z-( )]+/,
        message: 'Invalid city. Please use only letters, spaces, and dashes (-).',
    },
    {
        label: 'State',
        required: true,
        value: /[^A-Za-z-( )]+/,
        message: 'Invalid state. Please use only letters, spaces, and dashes (-).',
    },
    {
        label: 'Zipcode',
        required: true,
        value: /[^0-9]+/,
        message: 'Invalid zipcode. Please use only letters, spaces, and dashes (-).',
    },
    {
        label: 'Phone Number',
        required: true,
        value: /^[0-9-( )]+$/,
        message: 'Invalid phone number. Please use only numbers, spaces, and dashes (-).',
    }
];