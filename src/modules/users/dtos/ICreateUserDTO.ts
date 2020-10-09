export default interface ICreateUserDTO{
  name:string;
  email:string;
  type:string;
  password_hash:string;
  image_id?:string;
}