import React, { Component, Fragment } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com"; 
import { HideOverflow_SC, ContentCenter_SC } from "./StyledComponentHub";
import { SuperSecretEmailKeys } from "./../../envVar";

const CustomLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
`;

const CustomInput = styled.input`
    background: transparent;
    border: 1px solid #FF8552;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    margin-left: 2rem;
    width: 45%;
    color: #FF8552;
    font-size: 1.4rem;
    font-family: "Open Sans Condensed", sans-serif;

    &:focus{
        border: 1px solid #FF8552;
        outline: none;
    }
`;

const CustomTextarea = styled.textarea`
    background: transparent;
    border: 1px solid #FF8552;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    margin: 2rem;
    width: 45%;
    height: 200px;
    color: #FF8552;
    font-size: 1.4rem;
    font-family: "Open Sans Condensed", sans-serif;

    &:focus{
        border: 1px solid #FF8552;
        outline: none;
    }
`;

const CustomButton = styled.input`
    background: transparent;
    border: 1px solid #FF8552;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    margin-left: 2rem;
    width: 45%;
    color: #FF8552;
    font-size: 1.4rem;
    font-family: "Open Sans Condensed", sans-serif;

    &:focus{
        border: 1px solid #FF8552;
        outline: none;
    }
`;

class ContactForm extends Component{
    state = {
        name: '',
        email: '',
        message: ''
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }
    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }
    handleMessageChange = (event) => {
        this.setState({message: event.target.value});
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const obj = {
            sender_name: this.state.name,
            sender_email: this.state.email,
            message: this.state.message,
        };
        emailjs.send(SuperSecretEmailKeys[0], SuperSecretEmailKeys[1],
             JSON.stringify(obj), SuperSecretEmailKeys[2]);
        
        alert('A name was submitted: ' + this.state.value);
    }
    
    render(){
        return (
            <Fragment>
                <ContentCenter_SC>
                    <HideOverflow_SC>
                        <form onSubmit={this.handleSubmit}>
                            <CustomLabel>
                            Name:
                            <CustomInput type="text" name="sender_name" value={this.state.value} onChange={this.handleNameChange} />
                            </CustomLabel>
                            <CustomLabel>
                            Email:
                            <CustomInput type="text" name="sender_email" value={this.state.value} onChange={this.handleEmailChange} />
                            </CustomLabel>
                            <CustomLabel>
                            Message:
                            <CustomTextarea type="text" name="message" value={this.state.value} onChange={this.handleMessageChange} />
                            </CustomLabel>
                            <CustomInput type="submit" value="Submit" />
                        </form>
                    </HideOverflow_SC>                
                </ContentCenter_SC>
            </Fragment>
        );
    }
}


export default ContactForm;