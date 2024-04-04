import express from 'express';

export default express.urlencoded({ extended: true, limit: '10mb' });
