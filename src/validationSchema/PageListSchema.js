import * as Yup from 'yup';

export const PageListSchema = Yup.object({
  pageName : Yup.string().required('Page name is required').min(3).max(25),
  isActive : Yup.boolean().required('Status is required'),
})
