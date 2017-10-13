import { Selector } from 'testcafe';

const TEST_URL = process.env.TEST_URL;

fixture('/').page(`${TEST_URL}/`);

test(`users should be able to view the '/' page`, async (t) => {
  await t
    .navigateTo(TEST_URL)
    .expect(Selector('H1').withText('Camputer').exists).ok()
    .expect(Selector('H2').withText('Temperature').exists).ok()
    .expect(Selector('H4').withText('32c').exists).ok()

});