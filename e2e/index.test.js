import { Selector } from 'testcafe';

const TEST_URL = process.env.TEST_URL;

fixture('/').page(`${TEST_URL}/`);

test(`users should be able to view the '/' page`, async (t) => {
  await t
    .navigateTo(TEST_URL)
    .expect(Selector('H1').withText('Camputer').exists).ok()
    .expect(Selector('H2').withText('Temperature').exists).ok()
    .expect(Selector('H4').withText('32c').exists).ok()
    .expect(Selector('H2').withText('Humidity').exists).ok()
    .expect(Selector('H4').withText('42.8%').exists).ok()
    .expect(Selector('span.timestamp').withText('2017-10-08 10:40:05 PM').exists).ok()
    .expect(Selector('span.timestamp').withText('2017-10-14 7:57:24 AM').exists).ok()
});