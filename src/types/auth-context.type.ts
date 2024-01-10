import { ActorSubclass, HttpAgent, Identity } from "@dfinity/agent";

import { AuthClient } from "@dfinity/auth-client";
import { _SERVICE } from "../declarations/frontend/frontend.did";

export type AuthContextType = {
  authClient: AuthClient | undefined;
  actor: ActorSubclass<_SERVICE> | undefined;
  identity: Identity | undefined;
  agent: HttpAgent | undefined;
  isAuthenticated: boolean | undefined;
  hasLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};
