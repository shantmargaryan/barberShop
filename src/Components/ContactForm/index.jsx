import {
    ContactFormSection,
    ContactFormContainer,
    Iframe,
    ContactFormTitle,
    ContactFormText,
    Form,
    Input,
    TextArea,
    Button
} from "./styled"
import useSWR from "swr"
import { fetcher } from "../../Helpers/fetcher"
function ContactForm() {

    const { data, error } = useSWR(`${import.meta.env.VITE_API_URL}/ContactForm`, fetcher)
    if (error) return <div>failed to load</div>


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "9d8b7267-8669-4d02-b1b6-5b0c899451b4");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            event.target.reset();
        }
    };

    return (
        <ContactFormSection>
            <ContactFormContainer>
                <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d779444.2328390186!2d44.297035500000014!3d40.2601084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sam!4v1733582338511!5m2!1sen!2sam" loading="lazy"></Iframe>
                <Form onSubmit={onSubmit}>
                    <ContactFormTitle>
                        {data?.title}
                    </ContactFormTitle>
                    <ContactFormText>
                        {data?.text}
                    </ContactFormText>
                    <Input type="text" name="name" placeholder="Your Name" required />
                    <Input type="number" name="email" placeholder="Phone Number" required />
                    <TextArea name="message" placeholder="Message"></TextArea>
                    <Button type="submit">Submit</Button>
                </Form>
            </ContactFormContainer>
        </ContactFormSection>
    )
}

export default ContactForm