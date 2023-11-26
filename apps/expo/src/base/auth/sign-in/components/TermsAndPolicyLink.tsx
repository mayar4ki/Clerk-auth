import React from 'react'
import { Typography } from '~/components/styled/Typography'

export const TermsAndPolicyLink = () => {
    return (

        <Typography
            variant="bodyMedium"
            color="primary"
            style={{
                alignSelf: 'center',

            }}>
            By signing up, you agree on our{' '}
            <Typography
                variant="bodyMedium"
                color="secondary"
                style={{ textDecorationLine: 'underline' }}>
                Terms & Condition
            </Typography>{' '}
            and{' '}
            <Typography
                variant="bodyMedium"
                color="secondary"
                style={{ textDecorationLine: 'underline' }}>
                Privacy Policy
            </Typography>
        </Typography>
    )
}
