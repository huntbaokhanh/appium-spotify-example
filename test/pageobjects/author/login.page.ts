import Page from '../page';
import { OnboardingFlow } from './onboarding.flow.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    onboardingFlow: OnboardingFlow;

    public get inputUsername() {
        return $('//android.widget.EditText[@resource-id="com.spotify.music:id/username_text"]');
    }

    public get inputPassword() {
        return $('//android.widget.EditText[@resource-id="com.spotify.music:id/password_text"]');
    }

    public get btnSubmit() {
        return $('//android.widget.Button[@resource-id="com.spotify.music:id/login_button"]');
    }

    public async login(username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

}

export default new LoginPage();
