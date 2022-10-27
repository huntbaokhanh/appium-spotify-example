import LoginPage from '../pageobjects/author/login.page';
import { OnboardingFlow, ONBOARDING_METHOD } from '../pageobjects/author/onboarding.flow.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        const onboardingFlow = new OnboardingFlow();
        await onboardingFlow.by(ONBOARDING_METHOD.LOGIN);
        await browser.pause(5000)
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');

        expect(true);
    });
});


