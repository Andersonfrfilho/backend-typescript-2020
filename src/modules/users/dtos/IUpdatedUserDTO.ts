export default interface ICreateUserDTO{
  name:string;
  email:string;
  type:string;
  password:string;
  image_id?:string;
}