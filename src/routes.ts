import customerRoutes from './routes/customerRoutes';

export const initRouters = (app) => {
  app.use('/api/customers', customerRoutes);
};