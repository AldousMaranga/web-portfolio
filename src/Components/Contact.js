import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div style={{ paddingTop: '80px' }} className='container'>
                <div className='contact-cont'>
                    <div className='contact-col1'>
                        <div className='header' style={{ color: 'black' }}>Get in Touch!</div>
                        <div style={{ paddingBottom: '20px' }}>You can connect with me using the contact details below.</div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src='assets/images/contact/location.svg' alt='img' width="auto" height="60px" />
                            Address: 40 L. Flores Street Pasil, Cebu City Philippines
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src='assets/images/contact/phone.svg' alt='img' width="auto" height="28px" style={{ margin: '16px' }} />
                            Phone: +63 9310268176
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src='assets/images/contact/email.svg' alt='img' width="auto" height="32px" style={{ margin: '14px' }} />
                            Email: marangaaldous263@gmail.com
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src='assets/images/contact/globe.svg' alt='img' width="auto" height="46px" style={{ margin: '7px' }} />
                            LinkedIn:<a href='https://www.linkedin.com/in/aldous-benjamin-maranga-b29a0b240/' target="_blank" rel="noreferrer" style={{ paddingLeft: '5px' }}>Aldous Maranga</a>
                        </div>
                    </div>
                    <div className='contact-col2'>
                        <form class="form">
                            <div class="header">Contact us</div>
                            <input type="email" placeholder="Your email" class="input" />
                            <textarea placeholder="Your message"></textarea>
                            <button>Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

export default Contact;