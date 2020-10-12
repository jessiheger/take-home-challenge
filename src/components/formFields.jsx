export const ContactFields = [
    {
        label: 'First Name',
        name: 'firstName',
        placeholder: 'Minnie',
        required : true,
        value: /^[a-z ,.'-]+$/i,
        message: 'Please provide first name.'
    },
    {
        label : 'Last Name',
        name: 'lastName',
        placeholder: 'Mouse',
        required: true,
        value: /^[a-z ,.'-]+$/i,
        message: 'Please provide last name.'
    },
    {
        label: 'Email Address',
        name: 'email',
        placeholder: 'minniemouse@disney.com',
        required: true,
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address.'
    },
    {
        label: 'Address',
        name: 'street1',
        placeholder: '1234 Strawberry Lane',
        required: true,
        value: /[^A-Za-z0-9-( )]+/,
        message: 'Invalid street address. Please use only numbers, letters, spaces, and dashes (-).',
    },
    {
        label: 'Apartment/Unit',
        name: 'street2',
        placeholder: 'Apt A',
        required: false,
        value: /[^A-Za-z0-9-( )]+/,
        message: 'Invalid street address. Please use only numbers, letters, spaces, and dashes (-).',
    },
    {
        label: 'City',
        name: 'city',
        placeholder: 'Los Angeles',
        required: true,
        value: /[^A-Za-z-( )]+/,
        message: 'Invalid city. Please use only letters, spaces, and dashes (-).',
    },
    {
        label: 'State',
        name: 'state',
        placeholder: 'CA',
        required: true,
        value: /[^A-Za-z-( )]+/,
        message: 'Invalid state. Please use only letters, spaces, and dashes (-).',
    },
    {
        label: 'Zipcode',
        name: 'zip',
        placeholder: '12345',
        required: true,
        value: /[^0-9]+/,
        message: 'Invalid zipcode. Please use only letters, spaces, and dashes (-).',
    },
    {
        label: 'Phone Number',
        name: 'phone',
        placeholder: '111-222-3333',
        required: true,
        value: /^[0-9-( )]+$/,
        message: 'Invalid phone number. Please use only numbers, spaces, and dashes (-).',
    }
];

export const BillingFields = [
    {
        label: 'Credit Card Number (numbers only, no dashes)',
        name: 'ccNum',
        placeholder: 'XXXXXXXX',
        required: true,
        value: /[^0-9]+/,
        message: 'Invalid card number. Please use only numbers.'
    },
    {
        label: 'Expiration (MM/YY)',
        name: 'exp',
        placeholder: '03/25',
        required: true,
        value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
        message: 'Invalid expiration date. Please enter as MM/YY.'

    }
]