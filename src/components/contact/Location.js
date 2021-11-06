import React from 'react'

const Location = () => {
    return (
        <section class="contact_map">

            <div class="container">

                <div class="col-md-12"><h1>Find Us on Map</h1></div>

            </div>

            <iframe title='location'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.6331329352674!2d76.318160015332!3d10.047101474976838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080de7807b2d99%3A0xfd38e059f7bfc667!2sDriver%20Logistics%20LLP%20Head%20Office!5e0!3m2!1sen!2sin!4v1634195448997!5m2!1sen!2sin"
                width="100%" height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy">
            </iframe>

        </section>
    )
}

export default Location
