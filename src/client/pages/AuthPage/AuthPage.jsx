import React from 'react';

import AuthForm from '../../AuthForm'

import styles from './AuthPage.module.scss'

function AuthPage() {
    return (
        <section className={styles.authPageWrapper}>
            <div className={styles.container}>
                <AuthForm />  
            </div>
            
        </section>
        )
};

export default AuthPage;
