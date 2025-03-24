import {useState} from "react";

import {useLanguage} from "../../../../contexts/Lang.jsx";
import en from "../../../../locales/en.json"
import pl from "../../../../locales/pl.json"

import './styles.css';

const contactForm = () => {

    const { language } = useLanguage();
    const localization = language === "en" ? en : pl;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        country: '',
        choice: '',
        agreement: '',

    });

    async function Apply(formData) {
        console.log(formData);
    }

    return (
        <form className="form-main" action={Apply}>
            <div className="form-group">
                <label className="text-input-label">{localization.contactForm.fullName}</label>
                <input placeholder={localization.contactForm.fullNamePlaceholder} className="text-input" name="fullName" value={formData.fullName} onChange={handleInputChange} />

                <label className="text-input-label">{localization.contactForm.email}</label>
                <input placeholder={localization.contactForm.emailPlaceholder} className="text-input" name="email" value={formData.email}  onChange={handleInputChange} />
            </div>

            <div className="form-group">
                <label className="text-input-label">{localization.contactForm.phone}</label>
                <input className="text-input" name="phone" value={formData.phone}  onChange={handleInputChange} />

                <label className="text-input-label">{localization.contactForm.country}</label>
                <input className="text-input" name="country" value={formData.country} onChange={handleInputChange} />
            </div>

            <div className="form-group-3">
                <label>{localization.contactForm.chosenCar}</label>
                <textarea className="text-area-input" rows="2" cols="30" name="choice" value={formData.choice}  onChange={handleInputChange} />

                <div style={{dispay: "flex", gap: "20px", flexDirection: "row"}}>
                    <label>{localization.contactForm.agreementText}</label>
                    <input type="checkbox" name="agreement" value={formData.agreement} onChange={handleInputChange}  />
                </div>
            </div>


            <button type="submit">{localization.contactForm.submitButton}</button>
        </form>
);
}

export default contactForm;