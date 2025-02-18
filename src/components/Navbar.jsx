import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router";


const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [activeDropdownMenu, setActiveDropdownMenu] = useState(null);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const toggleDropdown = (index) => {
    setActiveDropdownMenu(activeDropdownMenu === index ? null : index);
  };

  const menuItems = [
    {
      title: "Platform",
      sections: [
        {
          title: "BUILD",
          items: [
            { name: "Design", desc: "Build high-performing sites" },
            { name: "Edit mode", desc: "Empower your content team" },
            { name: "Interactions", desc: "Craft immersive experiences" },
            {
              name: "Page building",
              desc: "Launch simple landing pages quickly",
              isNew: true,
            },
          ],
        },
        {
          title: "MANAGE",
          items: [
            { name: "CMS", desc: "Manage content at scale" },
            { name: "Hosting", desc: "Host and scale your site without the hassle" },
            { name: "Localization", desc: "Customize your site for a worldwide audience" },
            { name: "Security", desc: "Ensure your site stays safe" },
          ],
        },
        {
          title: "OPTIMIZE",
          items: [
            { name: "Analyze", desc: "Understand how your site performs", isNew: true },
            { name: "Optimize", desc: "Maximize conversions with testing", isNew: true },
            { name: "SEO", desc: "Grow your reach with fine-tuned controls" },
          ],
        },
      ],
    },
    {
      title: "Solutions",
      items: [
        { name: "For Enterprise", desc: "Scale your business" },
        { name: "For Startups", desc: "Move faster with CodeTutor" },
        { name: "For Agencies", desc: "Win more clients" },
        { name: "For Marketing", desc: "Drive more growth" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Showcase", desc: "Get inspired by the community" },
        { name: "Blog", desc: "Read latest news and articles" },
        { name: "Documentation", desc: "Learn from our resources" },
        { name: "Community", desc: "Join the conversation" },
      ],
    },
  ];

  return (
    <nav>
      <div className="bg-black text-white fixed top-0 left-0 right-0 z-10 border-b border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div>
              <Link to="/" className="text-2xl font-bold">
                <span className="text-blue-500">CodeTutor</span>{" "}
                <span className="text-white">Ui</span>
              </Link>
            </div>

            {/* Desktop Navbar Menu */}
            <div className="hidden sm:flex items-center space-x-4">
              {menuItems.map((menu, index) => (
                <div key={index} className="relative">
                  <button
                    className="text-white hover:text-gray-50 px-4 py-2 flex items-center"
                    onClick={() => toggleDropdown(index)}
                  >
                    {menu.title}{" "}
                    <MdKeyboardArrowDown
                      className={`ml-2 h-5 transition-transform ${
                        activeDropdownMenu === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdownMenu === index && (
                    <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg py-2 text-black">
                      {menu.sections ? (
                        <div className="p-4">
                          {menu.sections.map((section, idx) => (
                            <div key={idx} className="mb-3">
                              <h4 className="font-bold text-gray-800">{section.title}</h4>
                              {section.items.map((item, i) => (
                                <Link
                                  to={`/${menu.title.toLowerCase()}/${item.name.toLowerCase()}`}
                                  key={i}
                                  className="block px-4 py-2 hover:bg-gray-100"
                                >
                                  <p className="text-sm font-medium">{item.name}</p>
                                  <p className="text-xs text-gray-500">{item.desc}</p>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-4 space-y-2">
                          {menu.items.map((item, idx) => (
                            <Link
                              to={`/${menu.title.toLowerCase()}/${item.name.toLowerCase()}`}
                              key={idx}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              <p className="text-sm font-medium">{item.name}</p>
                              <p className="text-xs text-gray-500">{item.desc}</p>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/enterprise" className="text-white hover:text-gray-50 px-4 py-2">
                Enterprise
              </Link>
              <Link to="/pricing" className="text-white hover:text-gray-50 px-4 py-2">
                Pricing
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex space-x-2">
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md">
                Login
              </button>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;