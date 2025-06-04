import customerRoutes from './routes/customerRoutes';
import productRoutes from './routes/productsRoutes';

export const initRouters = (app) => {
  app.use('/api/customers', customerRoutes);
  app.use('/api/products', productRoutes);
};