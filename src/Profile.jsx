import React from "react";

import { MdLocationOn } from "react-icons/md";
import { ImLink, ImTwitter } from "react-icons/im";
import { FaBuilding } from "react-icons/fa";

import { useAppContext } from "./Context";

const getDate = (iso_date) => {
  const options = { year: "numeric", month: "short", day: "numeric", formatMatcher: "basic" };
  const date = new Date(iso_date).toLocaleString("en-GB", options);
  return date;
};

const ListItem = ({ text, value }) => {
  return (
    <li className="flex flex-col justify-center items-center px-4">
      <p className="capitalize pb-2 font-space text-11 leading-16 tracking-0 font-regular text-primary-300">{text}</p>
      <h5 className="font-space text-16 leading-24 tracking-0 font-bold text-primary-400">{value}</h5>
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
      <span className="pl-4">Not Available</span>
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

  const Socials = () => {
    return (
      <ul className="flex flex-col py-6 w-full items-start font-space text-13 leading-20 tracking-0 font-regular text-primary-300">
        <Item className={`mb-4 ${location ? "" : "opacity-50"}`}>
          {location ? <ItemText Icon={MdLocationOn} text={location} /> : <NotAvailable Icon={MdLocationOn} />}
        </Item>
        <Item className={`mb-4 ${blog ? "" : "opacity-50"}`}>
          {blog ? <ItemLink Icon={ImLink} text={blog} link={blog} /> : <NotAvailable Icon={ImLink} />}
        </Item>
        <Item className={`mb-4 ${twitter_username ? "" : "opacity-50"}`}>
          {twitter_username ? (
            <ItemLink Icon={ImTwitter} text={twitter_username} link={`https://twitter.com/${twitter_username}`} />
          ) : (
            <NotAvailable Icon={ImTwitter} />
          )}
        </Item>
        <Item className={`${company ? "" : "opacity-50"}`}>
          {company ? (
            <ItemLink Icon={FaBuilding} text={company} link={`https://github.com/${twitter_username}`} />
          ) : (
            <NotAvailable Icon={FaBuilding} />
          )}
        </Item>
      </ul>
    );
  };

  return (
    <section className="flex flex-col p-5 shadow-lg rounded-xl bg-white dark:bg-primary-800">
      <div className="flex flex-row">
        <div className="w-3/12 mr-5">
          <img src={avatar_url} alt="avatar" className="w-full rounded-full shadow-md" />
        </div>
        <div className="w-3/4">
          <h2 className="font-space text-16 leading-24 tracking-0 font-bold text-primary-400">{name}</h2>
          <h3 className="pb-2 font-space text-13 leading-20 tracking-0 font-regular text-primary-100">{`@${login}`}</h3>
          <h4 className="font-space text-13 leading-20 tracking-0 font-regular text-primary-200">{`Joined ${getDate(
            created_at
          )}`}</h4>
        </div>
      </div>
      <p className="py-6 text-13 font-regular leading-25 tracking-0 text-primary-300">{bio}</p>
      <ul className="flex flex-row justify-center rounded-xl p-5 bg-primary-500">
        <ListItem text="repos" value={public_repos} />
        <ListItem text="followers" value={followers} />
        <ListItem text="following" value={following} />
      </ul>
      <Socials />
    </section>
  );
};
