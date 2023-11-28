#!/usr/bin/node

/**
 * Job Processor
 */

import { createQueue } from 'kue';

const queue = createQueue();

function sendNotification(phoneNumber, message){
	console.log(`sending notification to ${phoneNumber}, with message: ${message}`);
}

queue.process('push_notification_code', (job, done) => {
	sendNotification(job.data.phoneNumber, job.data.message);
	done();
});
