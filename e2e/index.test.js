import { Selector } from 'testcafe';
import moment from 'moment-timezone';
import axios from 'axios';

const TEST_URL = process.env.TEST_URL;

fixture('/')
  .page(`${TEST_URL}/`)
  .beforeEach( async t => {
    t.ctx.timestamp = moment();
    const serializedTimestamp = t.ctx.timestamp.tz('Europe/London').format('YYYY-MM-DDTh:mm:ss.000000');
    axios.post(`${process.env.REACT_APP_CAMPUTER_SERVICE_URL}/sensorreadings`,{
      timestamp: serializedTimestamp,
      value:12.3
    })
    .catch((err) => { console.log(err); })
    axios.post(`${process.env.REACT_APP_CAMPUTER_SERVICE_URL}/humidities`,{
      timestamp: serializedTimestamp,
      value:45.6
    })
    .catch((err) => { console.log(err); })
  });

test(`users should be able to view the '/' page`, async (t) => {  
  const timestamp = moment().tz('America/Edmonton').format(' h:mma MMMM DD, YYYY');
  const lastReadingTimestamp = t.ctx.timestamp.tz('America/Edmonton').format('YYYY-MM-DD h:mm A');
  console.log(lastReadingTimestamp);
  await t
    .navigateTo(TEST_URL)
    .expect(Selector('H1').withText(timestamp).exists).ok()
    .expect(Selector('H2').withText('Temperature').exists).ok()
    .expect(Selector('H4').withText('12.3\u2103').exists).ok()
    .expect(Selector('H2').withText('Humidity').exists).ok()
    .expect(Selector('H4').withText('45.6%').exists).ok()
    .expect(Selector('span.timestamp').withText(lastReadingTimestamp).count).eql(2)
    .expect(Selector('span.timestamp').withText(lastReadingTimestamp).exists).ok();
});