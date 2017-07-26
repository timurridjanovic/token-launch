import moment from 'moment'

const comments = [
  { username: 'Victoria', message: 'bah, it\' okay...', date: moment('07/20/17', 'mm/dd/yy') },
  { username: 'Rachel', message: 'wow, this is awesome!', date: moment('07/15/17', 'mm/dd/yy') },
  {
    username: 'Roger',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem arcu, ' +
      'sagittis sed mattis at, molestie sit amet lectus. Nunc et magna sed sem ultricies porta. ' +
      'Proin eu lacus mattis, bibendum arcu eu, tincidunt sem. Proin non aliquam mi. Mauris a aliquam sapien. ' +
      'Praesent quis vestibulum nisl, vitae vehicula ipsum. Aenean augue ante, molestie in est nec, accumsan ultricies magna. ' +
      'Aliquam ultrices sodales congue. Donec aliquet, velit in varius varius, risus elit molestie massa, a eleifend mi metus sit amet ex.',
    date: moment('07/10/17', 'mm/dd/yy')
  },
  { username: 'Bobby', message: 'hey great campaign!', date: moment('07/01/17', 'mm/dd/yy') }
]

class Api {
	static getUserData () {
		return Api._fakeService({ user: 'Timur' }, 1000)
  }

  static getContributionData () {
    return Api._fakeService({
      totalContribution: 65000,
      totalGoal: 200000,
      backers: 2000,
      timeLeft: 48 * 60 * 60
    }, 1000)
  }

  static getComments () {
    return Api._fakeService({ comments }, 0)
  }

	static _fakeService (obj, delay) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({ response: obj })
			}, delay)
		})
	}
}

export default Api
