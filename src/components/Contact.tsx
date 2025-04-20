import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const Contact: React.FC = () => {
  return (
    <section id="two" className="bg-gray-900 text-white py-16 px-6 md:px-12 rounded-lg">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-6">Get In Touch</h2>
        <p className="text-lg mb-10">
          Feel free to reach out via the contact information on my CV, or connect with me on LinkedIn or GitHub.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              {/*  Cast explicitly */}
              {FiMapPin({ className: "w-5 h-5" })} Location
            </h3>
            <p className="mt-2 text-lg">Slovakia, Europe</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Socials</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://github.com/alexandrasky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg hover:underline hover:text-gray-200 transition"
                >
                   {FaGithub({ className: "w-5 h-5" })} GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alexandra-skyvov%C3%A1-7838b0215/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg hover:underline hover:text-gray-200 transition"
                >
                  {FaLinkedin({ className: "w-5 h-5" })}
                   LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
