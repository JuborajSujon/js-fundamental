// let paymentSuccess = true;
// let mark = 69;

// function enroll(){
//     console.log('Crouse enrollment is in progress');

// 	const promise = new Promise(function(resolve, reject){
// 		setTimeout(() => {
// 			if (paymentSuccess) {
// 				resolve();
// 			} else {
// 				reject("Payment failed!");
// 			}
// 		}, 3000);
// 	});

// 	return promise;
// }

// function progress() {
//     console.log('Course on progress ...');
// 	const promise = new Promise(function(resolve, reject){
// 		setTimeout(() => {
// 			if (mark >= 80) {
// 				resolve();
// 			} else {
// 				reject("You could not enough mark to get the certificate");
// 			}
// 		}, 3000);
// 	});
//     return promise;
// }

// function getCertificate() {
//     console.log("Your certificate is in prepering");
// 	const promise = new Promise(function(resolve){
// 		setTimeout(() => {
// 			resolve("Congratulation! You got the certificate.");
// 		}, 2000);
// 	});

//     return promise;
// }

// enroll()
// 	.then(progress)
// 	.then(getCertificate)
// 	.then(function(value){
// 		console.log(value);
// 	})
// 	.catch(function(err){
// 		console.log(err);
// 	})

// const takeOrder = (customer, callback) => {
// 	console.log(`take order for ${customer}`);
// 	callback(customer);
// }

// const processOrder = (customer, callback) => {
// 	console.log(`precessing order for ${customer}`);

// 	setTimeout(() =>{
// 		console.log(`cooking complete`);
// 		console.log(`order processed for ${customer}`);
// 		callback(customer)
// 	}, 3000);
// };

// const completeOrder = (customer) => {
// 	console.log(`completed order for ${customer}`);
// }

// takeOrder('customer 1', (customer) => {
// 	processOrder(customer, (customer) =>{
// 		completeOrder(customer);
// 	})
// });

// const hasMeeting = false;

// const meeting = new Promise((resolve, reject) => {
// 	if (!hasMeeting) {
// 		const meetingDetails = {
// 			name: 'Technical Meeting',
// 			location: 'Google Meet',
// 			time: '10:00 PM',
// 		}
// 		resolve(meetingDetails);
// 	} else {
// 		reject(new Error('Meeting already scheduled!'))
// 	}
// })

// const addToCalender = (meetingDetails) => {
// 		const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
// 		return Promise.resolve(calendar);

// }

// meeting
// 	.then(addToCalender)
// 	.then((res)=>{
// 		console.log(JSON.stringify(res))
// 	})
// 	.catch((err)=>{
// 		console.log(err.message)
// 	})

const promise1 = Promise.resolve(`Promise 1 resolve`);

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(`Promise 2 resolved`);
	}, 2000);
});

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));

Promise.all([promise1, promise2]).then((res) => {
	console.log(res);
});
