"use client";

import React, { useEffect, useState } from "react";
import {
  User,
  Mail,
  Briefcase,
  MapPin,
  Calendar,
  Edit2,
  Twitter,
  LinkedinIcon as LinkedIn,
  GitlabIcon as GitHub,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import EditProfileModal from "@/components/EditProfileModal";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/crm/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import logo from "@/public/logo/logo.png";
import profile from "@/public/galelio.jpg";
import { useRouter } from "next/navigation";

interface UserData {
  full_name: string;
  email: string;
  role: string;
  location: string;
  bio: string;
  joined_date: string;
  avatar_url: string;
  cover_url: string;
}

export default function page() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("");
  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/unauthorized");
    } else {
      setUser(JSON.parse(user));
    }
  }, []);

  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "/dashboard/profile",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "logout",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen w-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      {user && (
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between h-full gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {links?.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div>
              <SidebarLink
                link={{
                  label: "Muneeb",
                  href: "#",
                  icon: (
                    <Image
                      src={profile}
                      className="h-7 w-7 flex-shrink-0 rounded-full"
                      width={50}
                      height={50}
                      alt="Avatar"
                    />
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>
      )}
      {user && <ProfilePage />}
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="/dashboard"
      className="font-normal flex flex-col space-x-2 items-start text-sm text-black py-1 relative z-20"
    >
      <Image src={logo} alt="capco" width={50} className="w-fit object-fit" />
    </Link>
  );
};

const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image src={logo} alt="capco" width={50} className="w-fit object-fit" />
    </Link>
  );
};

import { supabase } from "@/lib/supabaseClient";

const ProfilePage = () => {
  const [user, setUser] = useState<any | null>(null); // User data fetched from Supabase
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const userEmail = localStorage.getItem("user"); // Get email from localStorage
     
      if (!userEmail) {
        console.error("No email found in localStorage");
        return;
      }else{
               const userJson = JSON.parse(userEmail); // Parse user data into JSON
               const email = userJson.user.email;
      
        
      const { data, error } = await supabase
        .from("profiles") // Replace 'profiles' with your actual table name
        .select("email, role, location, joined, name, bio")
        .eq("email", email) // Match the email from localStorage
        .single(); // assuming one user per session

      if (error) {
        console.error("Error fetching profile:", error);
        return;
      }

      if (data) {
        setUser(data); // Set the fetched user data to state
      }
    }
    };

    fetchUserData();
  }, []); // Empty dependency array to run on component mount

  useEffect(() => {
    console.log("this is user ", user);
  }, [user]);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice(-2); // Last 2 digits of the year
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month (0-based, so add 1)
    const day = date.getDate().toString().padStart(2, "0"); // Day

    return `${year}/${month}/${day}`;
  };
  if (!user) {
    return <div>Loading...</div>;
  }

  return user ? (
    <div className="min-h-screen w-screen bg-gray-100">
      <header className="relative h-48 md:h-64 bg-gray-300 overflow-hidden">
        <Image
          src={user.cover_url || logo}
          alt="Profile cover"
          className="w-full h-full object-cover"
        />
      </header>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <Card className="relative">
          <CardHeader className="pb-0">
            <div className="flex flex-col sm:flex-row items-center sm:items-end space-y-4 sm:space-y-0 sm:space-x-4">
              <Avatar className="w-32 h-32 border-4 border-white -mt-16">
                <AvatarImage
                  src={
                    user?.avatar_url ||
                    "https://api.dicebear.com/6.x/avataaars/svg?seed=Jane"
                  }
                  className="bg-white"
                />
                <AvatarFallback>
                  {user?.name
                    ?.split(" ")
                    ?.map((n: string) => n[0])
                    ?.join("") || "User"}
                </AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <CardTitle className="text-2xl font-bold">
                  {user?.name || "Unknown User"}
                </CardTitle>
                <p className="text-gray-500">{user?.role || ""}</p>
              </div>
              <Button
                className="absolute top-4 right-4"
                size="sm"
                onClick={() => setIsEditModalOpen(true)}
              >
                <Edit2 className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardHeader>
          <CardContent className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoItem
                  icon={<Mail className="w-5 h-5" />}
                  label="Email"
                  value={user?.email}
                />
                <InfoItem
                  icon={<Briefcase className="w-5 h-5" />}
                  label="Role"
                  value={user?.role}
                />
                <InfoItem
                  icon={<MapPin className="w-5 h-5" />}
                  label="Location"
                  value={user?.location}
                />
                <InfoItem
                  icon={<Calendar className="w-5 h-5" />}
                  label="Joined"
                  value={user?.joined ? formatDate(user.joined) : "N/A"}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Bio</h3>
                <p className="text-gray-600">{user?.bio}</p>
                <div className="mt-4 flex space-x-4">
                  <SocialLink
                    href={user?.twitter || "#"}
                    icon={<Twitter className="w-5 h-5" />}
                  />
                  <SocialLink
                    href={user?.linkedin || "#"}
                    icon={<LinkedIn className="w-5 h-5" />}
                  />
                  <SocialLink
                    href={user?.github || "#"}
                    icon={<GitHub className="w-5 h-5" />}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <EditProfileModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          userData={user}
          onSave={async (updatedData) => {
  // Update local state and localStorage
  const Userdata = { ...user, ...updatedData };
  // const { email, ... Userdata } = updateUser;
 
  setUser(Userdata);
  console.log(Userdata.email);
  // Update in Supabase (assuming you have a `profiles` table)
  try {
    const { data, error } = await supabase
      .from("profiles")
      .update({ ...Userdata })
      .eq("email", user.email); // Match the email to update the correct profile

    if (error) throw error;

    console.log('Profile updated successfully:', data);
  } catch (error) {
    console.error('Error updating profile:', error);
  }
}}
        />
      </main>
    </div>
  ) : (
    <div>Loading...</div>
  );
};



const InfoItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center space-x-2">
    {icon}
    <span className="text-gray-500">{label}:</span>
    <span>{value }</span>
  </div>
);

const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-gray-400 hover:text-gray-600 transition-colors"
  >
    {icon}
  </a>
);

const ProfileSkeleton = () => (
  <div className="min-h-screen bg-gray-100 animate-pulse">
    <div className="h-48 md:h-64 bg-gray-300" />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-end space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-32 h-32 bg-gray-300 rounded-full -mt-16" />
          <div className="space-y-2">
            <div className="h-8 w-48 bg-gray-300 rounded" />
            <div className="h-4 w-32 bg-gray-300 rounded" />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-gray-300 rounded" />
                <div className="h-4 w-full bg-gray-300 rounded" />
              </div>
            ))}
          </div>
          <div>
            <div className="h-6 w-24 bg-gray-300 rounded mb-2" />
            <div className="space-y-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-4 w-full bg-gray-300 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

