import React from "react";

import { MdLocationOn } from "react-icons/md";
import { ImLink, ImTwitter } from "react-icons/im";
import { FaBuilding } from "react-icons/fa";

import { useAppContext, DEFAULT } from "./Context";

const getDate = (iso_date) => {
  const options = { year: "numeric", month: "short", day: "numeric", formatMatcher: "basic" };
  const date = new Date(iso_date).toLocaleString("en-GB", options);
  return date;
};

const ListItem = ({ text, value }) => {
  return (
    <li className="flex flex-col justify-center items-center md:items-start px-4 md:w-1/3">
      <p className="capitalize pb-2 font-space text-11 leading-16 tracking-0 md:text-13 md:leading-20 font-regular text-primary-300 dark:text-white">
        {text}
      </p>
      <h5 className="font-space text-16 leading-24 tracking-0 md:text-22 md:leading-33 font-bold text-primary-400 dark:text-white">
        {value}
      </h5>
    </li>
  );
};

const Item = ({ children, className }) => {
  return <li className={`flex flex-row justify-start items-center ${className}`}>{children}</li>;
};

const ItemText = ({ Icon, text }) => {
  return (
    <>
      <Icon className="text-20" />
      <span className="pl-4">{text}</span>
    </>
  );
};

const NotAvailable = ({ Icon }) => {
  return (
    <>
      <Icon className="text-20" />
      <span className="pl-4">{DEFAULT.NOT_FOUND}</span>
    </>
  );
};

const ItemLink = ({ Icon, text, link }) => {
  return (
    <a className="flex flex-row justify-start items-center" href={link}>
      <Icon className="text-20" />
      <span className="pl-4">{text}</span>
    </a>
  );
};

const Bio = ({ bio, className }) => {
  if (bio === "" || bio === undefined || bio === null) bio = DEFAULT.NO_BIO;
  return (
    <p
      className={`text-13 font-regular leading-25 tracking-0 md:text-15 md:leading-25 text-primary-300 text-opacity-75 dark:text-white dark:text-opacity-100 ${className}`}
    >
      {bio}
    </p>
  );
};

export const Profile = () => {
  const { data } = useAppContext();

  const {
    avatar_url,
    name,
    created_at,
    login,
    bio,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    blog,
    company,
  } = data;

  const Socials = ({ className }) => {
    return (
      <ul
        className={`flex flex-col md:flex-row md:flex-wrap w-full items-start font-space text-13 leading-20 tracking-0 md:text-15 md:leading-22 font-regular text-primary-300 dark:text-white ${className} py-6`}
      >
        <div className="md:w-1/2">
          <Item className={`mb-4 ${location ? "" : "opacity-50"}`}>
            {location ? <ItemText Icon={MdLocationOn} text={location} /> : <NotAvailable Icon={MdLocationOn} />}
          </Item>
          <Item className={`mb-4 ${blog ? "" : "opacity-50"}`}>
            {blog ? <ItemLink Icon={ImLink} text={blog} link={blog} /> : <NotAvailable Icon={ImLink} />}
          </Item>
        </div>
        <div className="md:w-1/2">
          <Item className={`mb-4 ${twitter_username ? "" : "opacity-50"}`}>
            {twitter_username ? (
              <ItemLink Icon={ImTwitter} text={twitter_username} link={`https://twitter.com/${twitter_username}`} />
            ) : (
              <NotAvailable Icon={ImTwitter} />
            )}
          </Item>
          <Item className={`${company ? "" : "opacity-50"}`}>
            {company ? (
              <ItemLink Icon={FaBuilding} text={company} link={`https://github.com/${company}`} />
            ) : (
              <NotAvailable Icon={FaBuilding} />
            )}
          </Item>
        </div>
      </ul>
    );
  };

  if (data && Object.keys(data).length === 0 && Object.getPrototypeOf(data) === Object.prototype) {
    return (
      <section className="w-full flex flex-col items-center justify-center shadow-lg rounded-xl bg-white dark:bg-primary-800">
        <h2 className="p-5 text-13 font-regular leading-25 tracking-0 md:text-15 md:leading-25 text-primary-300 text-opacity-75 dark:text-white dark:text-opacity-100 ">
          error fetching user from hithub
        </h2>
      </section>
    );
  }

  return (
    <section className="w-full flex flex-col lg:flex-row lg:items-start shadow-lg rounded-xl bg-white dark:bg-primary-800">
      <div className="hidden lg:flex w-1/4 pt-10 pl-10">
        <img src={avatar_url} alt="avatar" className="w-full rounded-full shadow-md" />
      </div>
      <div className="w-full lg:w-3/4">
        <div className="flex flex-row p-5 md:p-10 md:pb-6 lg:pb-3">
          <div className="w-3/12 mr-5 md:w-1/3 md:mr-0 md:pr-8 lg:hidden">
            <img src={avatar_url} alt="avatar" className="w-full rounded-full shadow-md" />
          </div>
          <div className="w-3/4 md:w-2/3 lg:w-full flex flex-col lg:flex-row justify-center">
            <div className="w-full lg:w-1/2">
              <h2 className="font-space text-16 leading-24 tracking-0 md:text-26 md:leading-38 font-bold text-primary-400 dark:text-white">
                {name}
              </h2>
              <h3 className="pb-2 font-space text-13 leading-20 tracking-0 md:text-16 md:leading-24 font-regular text-primary-100">{`@${login}`}</h3>
            </div>
            <h4 className="w-full lg:w-1/2 lg:text-right lg:pt-2 font-space text-13 leading-20 tracking-0 md:text-15 md:leading-22 font-regular text-primary-200 dark:text-white">{`Joined ${getDate(
              created_at
            )}`}</h4>
          </div>
        </div>
        <Bio bio={bio} className="px-5 md:px-10 md:py-0" />
        <ul className="flex flex-row justify-center rounded-xl p-5 bg-primary-500 dark:bg-primary-700 m-5 md:mx-10 md:my-6 lg:p-3">
          <ListItem text="repos" value={public_repos} />
          <ListItem text="followers" value={followers} />
          <ListItem text="following" value={following} />
        </ul>
        <Socials className="p-5 md:p-10 md:pt-4" />
      </div>
    </section>
  );
};
