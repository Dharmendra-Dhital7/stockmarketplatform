import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../landing_page/home/Hero";
import '@testing-library/jest-dom';


//Test Suite:

describe('Hero Component', () => {
    test("render hero image", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText('Hero section');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'Media/images/homeHero.png');
    });

    test("render signup button", () => {
        render(<Hero />);
        const signupButton = screen.getByRole('button', { name: /Signup now/i });
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass('btn btn-primary');
    })

});
