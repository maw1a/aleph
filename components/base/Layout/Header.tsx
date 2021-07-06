import React, { FC } from "react";
import { useSession, signOut } from "next-auth/client";
import SearchBar from "./SearchBar";
import { Logo, Bookmarks, Notification } from "../../../icons";
import Button from "../Button";
import ModalBase from "../Modal/ModalBase";
import LoginModal from "../Modal/LoginModal";
import Dropdown from "../Dropdown";

const Header: FC<any> = (props) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [profileDropdown, setProfileDropdown] = React.useState(false);
  const [session, loading] = useSession();
  return (
    <React.Fragment>
      <nav className="shadow-md px-4">
        <div className="container mx-auto px-2 py-3">
          <div className="w-100 flex items-center justify-between">
            <div className="inline-flex">
              <Logo className="h-12" />
            </div>
            <div className="flex">
              <SearchBar />
              {!loading && (
                <React.Fragment>
                  {session ? (
                    <div className="flex">
                      <Button icon={true}>
                        <Bookmarks className="h-5" fill="black" />
                      </Button>
                      <Button icon={true}>
                        <Notification className="h-5" fill="black" />
                      </Button>
                      <Dropdown
                        open={profileDropdown}
                        anchor={
                          <Button
                            icon={true}
                            className="border-2"
                            onClick={() => setProfileDropdown(!profileDropdown)}
                          >
                            AM
                          </Button>
                        }
                      >
                        <Button
                          className="text-gray-700 block px-4 py-2 text-sm"
                          onClick={() => signOut()}
                          fullWidth
                        >
                          Sign out
                        </Button>
                      </Dropdown>
                    </div>
                  ) : (
                    <div className="flex">
                      <Button
                        className="focus:outline-none"
                        onClick={() => setModalOpen(true)}
                      >
                        Login
                      </Button>
                      <Button className="bg-black text-white rounded-full px-5">
                        Sign up
                      </Button>
                    </div>
                  )}
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </nav>
      <ModalBase onClose={() => setModalOpen(false)} open={modalOpen}>
        <LoginModal />
      </ModalBase>
    </React.Fragment>
  );
};

export default Header;
