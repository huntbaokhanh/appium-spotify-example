import Page from "../page";

export class OnboardingFlow extends Page {

    public get loginbtn() {
        return $('//android.widget.Button[@text="Log in"]')
    }

    async by(method: ONBOARDING_METHOD) {
        const getBtnByMethod = await $(`//android.widget.Button[@text="${method}"]`);
        await getBtnByMethod.click();
    }
}

export enum ONBOARDING_METHOD {
    SIGNUP_FREE = "Sign up free",
    GOOGLE = "Continue with Google",
    FACEBOOK = "Continue with Facebook",
    LOGIN = "Log in"
}