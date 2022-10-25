import "./App.css";
import { Formik } from "formik";
import * as Yup from "yup";

function App() {
  return (
    <div className="container">
      <div className="brand-box">
        <h1>Magic Box</h1>
        <p>Build forms in React without the tears.</p>
      </div>
      <div className="magic-form">
        <Formik
          initialValues={{
            name: "",
            email: "",
            agree: false,
            favoriteColor: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Isim bos birakilamaz."),
            email: Yup.string()
              .email()
              .required("Email alani bos birakilamaz!"),
            agree: Yup.boolean().required("Kosullari kabul etmelisin!"),
            favoriteColor: Yup.string()
              .required("Renk alani bos birakilamaz!")
              .oneOf(["red", "blue", "green"]),
          })}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            handleReset,
            dirty,
            touched,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <h3>Kaydol</h3>
              <label htmlFor="name">isim</label>
              <input
                id="name"
                type="text"
                placeholder="ahmet"
                className="input"
                onChange={handleChange}
                value={values.name}
              />
              {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}
              <label htmlFor="email" className="topMargin">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="ahmetyanikdev@gmail.com"
                className="input"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
              <label htmlFor="favoriteColor" className="topMargin">
                Favori Renk
              </label>
              <div>
                <select
                  id="favoriteColor"
                  value={values.favoriteColor}
                  onChange={handleChange}
                  style={{
                    marginTop: 10,
                    width: "150px",
                    padding: "10px 15px",
                    outline: "none",
                  }}
                >
                  <option value="" label="Renk Sec" />
                  <option value="red" label="Kirmizi" />
                  <option value="blue" label="Mavi" />
                  <option value="green" label="Yesil" />
                </select>
              </div>
              {errors.favoriteColor && touched.favoriteColor && (
                <div className="input-feedback">{errors.favoriteColor}</div>
              )}
              <div className="checkbox topMargin">
                <input
                  id="agree"
                  type="checkbox"
                  value={values.agree}
                  onChange={handleChange}
                />
                <label htmlFor="agree" className="checkbox-label">
                  Sözlesmeyi okudum kabul ediyorum.
                </label>
              </div>
              <button type="submit" disabled={!dirty || isSubmitting}>
                Kaydol
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
