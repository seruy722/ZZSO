import _ from 'lodash';

const baseURL = 'https://serversdoprostoy.client02.prostoy.ru/api/sdo';
const serverURL = 'https://serversdoprostoy.client02.prostoy.ru';

const urls = {
  login: 'login',
  register: '/register',
  roles: '/roles',
  resendEmail: '/resend-email',
  saveUserInfo: '/send-user-information',
  userModel: '/get-user',
  updateProfileData: '/user',
  feedback: '/feedback',
  monitoringParents: '/monitoring/parents',
  monitoringOuos: '/monitoring/ouos',
  monitoringSpecialist: '/monitoring/specialist',
  courses: 'courses',
  regions: `${serverURL}/regions`,
  districts: `${serverURL}/districts`,
  serverURL,
  axios: {
    axiosDefaultData: {
      headers: {
        'Content-Type': 'application/vnd.api+json',
        Authorization: '',
      },
      baseURL,
    },
  },
  prostoyForm: 'https://agent.prostoy.ru/api/crmform.php',
  prostoyComment: 'https://agent.prostoy.ru/addComment.php',
};


export const getUrl = key => _.get(urls, key);
