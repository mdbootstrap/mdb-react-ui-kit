import React from 'react';
import { Dropdown, DropdownProviderProps } from './types';
export declare const DropdownContext: React.Context<Dropdown | null>;
export declare const DropdownProvider: ({ children, isOpen, options, animation, dropup, dropright, dropleft, onClose, onOpen, }: DropdownProviderProps) => JSX.Element;
