import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import './AddEvent.css'

const AddEvent = () => {
    //const loadedData = useLoaderData();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
  return (
    <div className="mt-8 mx-8 md:mx-16 lg:mx-32 admin-page">
      <div>
        <Link to="/admin">
          <div className="flex items-center text-blue-600 font-bold">
            <BsFillPeopleFill className="w-6 h-6" />
            <h6>Volunteer register list</h6>
          </div>
        </Link>

        <div className="flex items-center font-bold mt-4">
          <AiOutlinePlus className="w-4 h-4" />
          <h6>Add event</h6>
        </div>
      </div>
      <div className="admin-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label>Event Title</label>
        <input placeholder="Enter title" {...register("userName")} />

        {/* include validation with required or other standard HTML validation rules */}
        <label>Event Date</label>
        <input type="date" {...register("email", { required: true })} />
        {/* include validation with required or other standard HTML validation rules */}
        <label>Description</label>
        <input placeholder="Enter Designation" {...register("description", { required: true })} />
        {/* register your input into the hook by invoking the "register" function */}
        <label>Upload Image</label>
        <input placeholder="Image url" {...register("date")} />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit"  className="btn btn-primary btn-block btn-md"/>
      </form>
      </div>
    </div>
  );
};

export default AddEvent;
