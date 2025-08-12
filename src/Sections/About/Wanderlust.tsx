import { Images } from "../../assets/pngs";
import Button from "../../Components/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const Wanderlust = () => {
  // const [email, setEmail] = useState("");
  // const [number, setNumber] = useState(0);
  // const [address, setAddress] = useState("");
  // const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      number: "",
      address: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      number: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number")
        .required("Required"),
      address: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <div className="px-2 lg:container max-w-full pb-28">
      <div className="bg-bgGreen rounded-3xl h-auto ">
        <div className="px-3 lg:px-10 2xl:contain pt-8 md:pt-36 pb-28 flex flex-col lg:flex-row items-center justify-center gap-14">
          <div className="max-w-lg xl:max-w-xl">
            <img alt="person" src={Images.person} />
          </div>
          <div className="max-w-[630px] w-full">
            <p className="text-darkGReen font-semibold font-jakarta text-sm pb-3">
              CONTACT INFORMATION
            </p>
            <p className="text-2xl xl:text-5xl font-bold font-jakarta text-darkGReen max-w-lg leading-normal pb-10">
              Let Your Wanderlust Guide You
            </p>
            <div className="bg-white rounded-2xl">
              <form onSubmit={formik.handleSubmit}>
                <div className="p-10 flex flex-col">
                  <div className="flex flex-col 2xl:flex-row gap-7 pb-5">
                    <div className="flex flex-col gap-1 w-full">
                      <label>Your Email</label>
                      <input
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="h-14 px-5 py-4 border border-borderGray rounded-full"
                        placeholder="Your Email"
                        type="email"
                      />
                      {formik.touched.email && formik.errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {formik.errors.email}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                      <label>Your Phone</label>
                      <input
                        name="number"
                        value={formik.values.number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="h-14 px-5 py-4 border border-borderGray rounded-full"
                        placeholder="Your Phone"
                        type="text"
                      />
                      {formik.touched.number && formik.errors.number && (
                        <p className="text-red-500 text-sm mt-1">
                          {formik.errors.number}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 pb-5">
                    <label>Your Address</label>
                    <input
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="h-14 px-5 py-4 border border-borderGray rounded-full"
                      placeholder="Your Address"
                      type="text"
                    />
                    {formik.touched.address && formik.errors.address && (
                      <p className="text-red-500 text-sm mt-1">
                        {formik.errors.address}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label>Message</label>
                    <textarea
                      name="message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      rows="3"
                      className="w-full border border-borderGray rounded-3xl pt-4 pl-5"
                      placeholder="Write Message.."
                    />
                    {formik.touched.message && formik.errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {formik.errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full mt-5 flex items-center justify-center h-14"
                    variant="primary"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wanderlust;
