import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum CanEditTypeEnum {
  Inherit = 'Inherit',
  LoggedInUsers = 'LoggedInUsers',
  OnlyTheseUsers = 'OnlyTheseUsers'
}

export enum CanViewTypeEnum {
  Anyone = 'Anyone',
  Inherit = 'Inherit',
  LoggedInUsers = 'LoggedInUsers',
  OnlyTheseUsers = 'OnlyTheseUsers'
}

/** Formatting options for fields that map to DBDatetime data types */
export enum DbDatetimeFormattingOption {
  Custom = 'CUSTOM',
  Date = 'DATE',
  DayOfMonth = 'DAY_OF_MONTH',
  DayOfWeek = 'DAY_OF_WEEK',
  Full = 'FULL',
  Long = 'LONG',
  Month = 'MONTH',
  Nice = 'NICE',
  Short = 'SHORT',
  ShortMonth = 'SHORT_MONTH',
  Time = 'TIME',
  Time12 = 'TIME12',
  Time24 = 'TIME24',
  Timestamp = 'TIMESTAMP',
  Year = 'YEAR'
}

export type DbFileComposite = {
  __typename?: 'DBFileComposite';
  filename?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
};

export type DbPolymorphicForeignKeyComposite = {
  __typename?: 'DBPolymorphicForeignKeyComposite';
  class?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** Formatting options for fields that map to DBText data types */
export enum DbTextFormattingOption {
  ContextSummary = 'CONTEXT_SUMMARY',
  FirstParagraph = 'FIRST_PARAGRAPH',
  LimitSentences = 'LIMIT_SENTENCES',
  Summary = 'SUMMARY'
}

/** The common interface shared by all DataObject types */
export type DataObject = {
  exists: Scalars['Boolean'];
  hashID: Scalars['String'];
  id: Scalars['ID'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};

export type File = DataObject & FileInterface & {
  __typename?: 'File';
  absoluteLink?: Maybe<Scalars['String']>;
  backLinks: FileLinkConnection;
  canEditType?: Maybe<CanEditTypeEnum>;
  canViewType?: Maybe<CanViewTypeEnum>;
  className?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  file?: Maybe<DbFileComposite>;
  fileFilename?: Maybe<Scalars['String']>;
  fileHash?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Member>;
  ownerID: Scalars['ID'];
  parent?: Maybe<FileInterface>;
  parentID: Scalars['ID'];
  showInSearch?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  version?: Maybe<Scalars['Int']>;
  viewerGroups: GroupConnection;
};


export type FileAbsoluteLinkArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FileBackLinksArgs = {
  filter?: InputMaybe<FileLinkFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileLinkSortFields>;
};


export type FileCreatedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type FileEditorGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};


export type FileExistsArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FileHashIdArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FileLastEditedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type FileLinkArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FileTypeAncestryArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FileViewerGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};

export type FileFilterFields = {
  absoluteLink?: InputMaybe<QueryFilterStringComparator>;
  backLinks?: InputMaybe<FileLinkFilterFields>;
  canEditType?: InputMaybe<QueryFilterCanEditTypeEnumComparator>;
  canViewType?: InputMaybe<QueryFilterCanViewTypeEnumComparator>;
  className?: InputMaybe<QueryFilterStringComparator>;
  created?: InputMaybe<QueryFilterStringComparator>;
  editorGroups?: InputMaybe<GroupFilterFields>;
  exists?: InputMaybe<QueryFilterBooleanComparator>;
  fileFilename?: InputMaybe<QueryFilterStringComparator>;
  fileHash?: InputMaybe<QueryFilterStringComparator>;
  fileVariant?: InputMaybe<QueryFilterStringComparator>;
  hashID?: InputMaybe<QueryFilterStringComparator>;
  id?: InputMaybe<QueryFilterIdComparator>;
  lastEdited?: InputMaybe<QueryFilterStringComparator>;
  link?: InputMaybe<QueryFilterStringComparator>;
  name?: InputMaybe<QueryFilterStringComparator>;
  owner?: InputMaybe<MemberFilterFields>;
  ownerID?: InputMaybe<QueryFilterIdComparator>;
  parent?: InputMaybe<FileFilterFields>;
  parentID?: InputMaybe<QueryFilterIdComparator>;
  showInSearch?: InputMaybe<QueryFilterBooleanComparator>;
  title?: InputMaybe<QueryFilterStringComparator>;
  typeAncestry?: InputMaybe<QueryFilterStringComparator>;
  version?: InputMaybe<QueryFilterIntComparator>;
  viewerGroups?: InputMaybe<GroupFilterFields>;
};

export type FileInterface = {
  absoluteLink?: Maybe<Scalars['String']>;
  backLinks: FileLinkConnection;
  canEditType?: Maybe<CanEditTypeEnum>;
  canViewType?: Maybe<CanViewTypeEnum>;
  className?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  file?: Maybe<DbFileComposite>;
  fileFilename?: Maybe<Scalars['String']>;
  fileHash?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Member>;
  ownerID: Scalars['ID'];
  parent?: Maybe<FileInterface>;
  parentID: Scalars['ID'];
  showInSearch?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  version?: Maybe<Scalars['Int']>;
  viewerGroups: GroupConnection;
};


export type FileInterfaceAbsoluteLinkArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FileInterfaceBackLinksArgs = {
  filter?: InputMaybe<FileLinkFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileLinkSortFields>;
};


export type FileInterfaceCreatedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type FileInterfaceEditorGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};


export type FileInterfaceExistsArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FileInterfaceHashIdArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FileInterfaceLastEditedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type FileInterfaceLinkArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FileInterfaceTypeAncestryArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FileInterfaceViewerGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};

export type FileInterfaceConnection = {
  __typename?: 'FileInterfaceConnection';
  edges: Array<FileInterfaceConnectionEdge>;
  nodes: Array<FileInterface>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type FileInterfaceConnectionEdge = {
  __typename?: 'FileInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: FileInterface;
};

export type FileLink = DataObject & {
  __typename?: 'FileLink';
  className?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  exists: Scalars['Boolean'];
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  linked?: Maybe<FileInterface>;
  linkedID: Scalars['ID'];
  parent?: Maybe<DbPolymorphicForeignKeyComposite>;
  parentClass?: Maybe<ParentClassEnum>;
  parentID?: Maybe<Scalars['Int']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type FileLinkCreatedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type FileLinkExistsArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FileLinkHashIdArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FileLinkLastEditedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type FileLinkTypeAncestryArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type FileLinkConnection = {
  __typename?: 'FileLinkConnection';
  edges: Array<FileLinkConnectionEdge>;
  nodes: Array<FileLink>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type FileLinkConnectionEdge = {
  __typename?: 'FileLinkConnectionEdge';
  /** The node at the end of the collections edge */
  node: FileLink;
};

export type FileLinkFilterFields = {
  className?: InputMaybe<QueryFilterStringComparator>;
  created?: InputMaybe<QueryFilterStringComparator>;
  exists?: InputMaybe<QueryFilterBooleanComparator>;
  hashID?: InputMaybe<QueryFilterStringComparator>;
  id?: InputMaybe<QueryFilterIdComparator>;
  lastEdited?: InputMaybe<QueryFilterStringComparator>;
  linked?: InputMaybe<FileFilterFields>;
  linkedID?: InputMaybe<QueryFilterIdComparator>;
  parentClass?: InputMaybe<QueryFilterParentClassEnumComparator>;
  parentID?: InputMaybe<QueryFilterIntComparator>;
  typeAncestry?: InputMaybe<QueryFilterStringComparator>;
};

export type FileLinkSortFields = {
  className?: InputMaybe<SortDirection>;
  created?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  lastEdited?: InputMaybe<SortDirection>;
  linked?: InputMaybe<FileSortFields>;
  linkedID?: InputMaybe<SortDirection>;
  parentClass?: InputMaybe<SortDirection>;
  parentID?: InputMaybe<SortDirection>;
};

export type FileSortFields = {
  backLinks?: InputMaybe<FileLinkSortFields>;
  canEditType?: InputMaybe<SortDirection>;
  canViewType?: InputMaybe<SortDirection>;
  className?: InputMaybe<SortDirection>;
  created?: InputMaybe<SortDirection>;
  editorGroups?: InputMaybe<GroupSortFields>;
  fileFilename?: InputMaybe<SortDirection>;
  fileHash?: InputMaybe<SortDirection>;
  fileVariant?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  lastEdited?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  owner?: InputMaybe<MemberSortFields>;
  ownerID?: InputMaybe<SortDirection>;
  parent?: InputMaybe<FileSortFields>;
  parentID?: InputMaybe<SortDirection>;
  showInSearch?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  version?: InputMaybe<SortDirection>;
  viewerGroups?: InputMaybe<GroupSortFields>;
};

export type Folder = DataObject & FileInterface & FolderInterface & {
  __typename?: 'Folder';
  absoluteLink?: Maybe<Scalars['String']>;
  backLinks: FileLinkConnection;
  canEditType?: Maybe<CanEditTypeEnum>;
  canViewType?: Maybe<CanViewTypeEnum>;
  className?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  file?: Maybe<DbFileComposite>;
  fileFilename?: Maybe<Scalars['String']>;
  fileHash?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Member>;
  ownerID: Scalars['ID'];
  parent?: Maybe<FileInterface>;
  parentID: Scalars['ID'];
  showInSearch?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  version?: Maybe<Scalars['Int']>;
  viewerGroups: GroupConnection;
};


export type FolderAbsoluteLinkArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FolderBackLinksArgs = {
  filter?: InputMaybe<FileLinkFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileLinkSortFields>;
};


export type FolderCreatedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type FolderEditorGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};


export type FolderExistsArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FolderHashIdArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FolderLastEditedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type FolderLinkArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FolderTypeAncestryArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FolderViewerGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};

export type FolderFilterFields = {
  absoluteLink?: InputMaybe<QueryFilterStringComparator>;
  backLinks?: InputMaybe<FileLinkFilterFields>;
  canEditType?: InputMaybe<QueryFilterCanEditTypeEnumComparator>;
  canViewType?: InputMaybe<QueryFilterCanViewTypeEnumComparator>;
  className?: InputMaybe<QueryFilterStringComparator>;
  created?: InputMaybe<QueryFilterStringComparator>;
  editorGroups?: InputMaybe<GroupFilterFields>;
  exists?: InputMaybe<QueryFilterBooleanComparator>;
  fileFilename?: InputMaybe<QueryFilterStringComparator>;
  fileHash?: InputMaybe<QueryFilterStringComparator>;
  fileVariant?: InputMaybe<QueryFilterStringComparator>;
  hashID?: InputMaybe<QueryFilterStringComparator>;
  id?: InputMaybe<QueryFilterIdComparator>;
  lastEdited?: InputMaybe<QueryFilterStringComparator>;
  link?: InputMaybe<QueryFilterStringComparator>;
  name?: InputMaybe<QueryFilterStringComparator>;
  owner?: InputMaybe<MemberFilterFields>;
  ownerID?: InputMaybe<QueryFilterIdComparator>;
  parent?: InputMaybe<FileFilterFields>;
  parentID?: InputMaybe<QueryFilterIdComparator>;
  showInSearch?: InputMaybe<QueryFilterBooleanComparator>;
  title?: InputMaybe<QueryFilterStringComparator>;
  typeAncestry?: InputMaybe<QueryFilterStringComparator>;
  version?: InputMaybe<QueryFilterIntComparator>;
  viewerGroups?: InputMaybe<GroupFilterFields>;
};

export type FolderInterface = {
  absoluteLink?: Maybe<Scalars['String']>;
  backLinks: FileLinkConnection;
  canEditType?: Maybe<CanEditTypeEnum>;
  canViewType?: Maybe<CanViewTypeEnum>;
  className?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  file?: Maybe<DbFileComposite>;
  fileFilename?: Maybe<Scalars['String']>;
  fileHash?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Member>;
  ownerID: Scalars['ID'];
  parent?: Maybe<FileInterface>;
  parentID: Scalars['ID'];
  showInSearch?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  version?: Maybe<Scalars['Int']>;
  viewerGroups: GroupConnection;
};


export type FolderInterfaceAbsoluteLinkArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FolderInterfaceBackLinksArgs = {
  filter?: InputMaybe<FileLinkFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileLinkSortFields>;
};


export type FolderInterfaceCreatedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type FolderInterfaceEditorGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};


export type FolderInterfaceExistsArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FolderInterfaceHashIdArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FolderInterfaceLastEditedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type FolderInterfaceLinkArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FolderInterfaceTypeAncestryArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type FolderInterfaceViewerGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};

export type FolderInterfaceConnection = {
  __typename?: 'FolderInterfaceConnection';
  edges: Array<FolderInterfaceConnectionEdge>;
  nodes: Array<FolderInterface>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type FolderInterfaceConnectionEdge = {
  __typename?: 'FolderInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: FolderInterface;
};

export type FolderSortFields = {
  backLinks?: InputMaybe<FileLinkSortFields>;
  canEditType?: InputMaybe<SortDirection>;
  canViewType?: InputMaybe<SortDirection>;
  className?: InputMaybe<SortDirection>;
  created?: InputMaybe<SortDirection>;
  editorGroups?: InputMaybe<GroupSortFields>;
  fileFilename?: InputMaybe<SortDirection>;
  fileHash?: InputMaybe<SortDirection>;
  fileVariant?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  lastEdited?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  owner?: InputMaybe<MemberSortFields>;
  ownerID?: InputMaybe<SortDirection>;
  parent?: InputMaybe<FileSortFields>;
  parentID?: InputMaybe<SortDirection>;
  showInSearch?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  version?: InputMaybe<SortDirection>;
  viewerGroups?: InputMaybe<GroupSortFields>;
};

export type Group = DataObject & {
  __typename?: 'Group';
  exists: Scalars['Boolean'];
  hashID: Scalars['String'];
  id: Scalars['ID'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type GroupExistsArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type GroupHashIdArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type GroupTypeAncestryArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type GroupConnection = {
  __typename?: 'GroupConnection';
  edges: Array<GroupConnectionEdge>;
  nodes: Array<Group>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type GroupConnectionEdge = {
  __typename?: 'GroupConnectionEdge';
  /** The node at the end of the collections edge */
  node: Group;
};

export type GroupFilterFields = {
  exists?: InputMaybe<QueryFilterBooleanComparator>;
  hashID?: InputMaybe<QueryFilterStringComparator>;
  id?: InputMaybe<QueryFilterIdComparator>;
  typeAncestry?: InputMaybe<QueryFilterStringComparator>;
};

export type GroupSortFields = {
  id?: InputMaybe<SortDirection>;
};

export type Image = DataObject & FileInterface & ImageInterface & {
  __typename?: 'Image';
  absoluteLink?: Maybe<Scalars['String']>;
  backLinks: FileLinkConnection;
  canEditType?: Maybe<CanEditTypeEnum>;
  canViewType?: Maybe<CanViewTypeEnum>;
  className?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  file?: Maybe<DbFileComposite>;
  fileFilename?: Maybe<Scalars['String']>;
  fileHash?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Member>;
  ownerID: Scalars['ID'];
  parent?: Maybe<FileInterface>;
  parentID: Scalars['ID'];
  showInSearch?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  version?: Maybe<Scalars['Int']>;
  viewerGroups: GroupConnection;
};


export type ImageAbsoluteLinkArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type ImageBackLinksArgs = {
  filter?: InputMaybe<FileLinkFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileLinkSortFields>;
};


export type ImageCreatedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type ImageEditorGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};


export type ImageExistsArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type ImageHashIdArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type ImageLastEditedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type ImageLinkArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type ImageTypeAncestryArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type ImageViewerGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};

export type ImageFilterFields = {
  absoluteLink?: InputMaybe<QueryFilterStringComparator>;
  backLinks?: InputMaybe<FileLinkFilterFields>;
  canEditType?: InputMaybe<QueryFilterCanEditTypeEnumComparator>;
  canViewType?: InputMaybe<QueryFilterCanViewTypeEnumComparator>;
  className?: InputMaybe<QueryFilterStringComparator>;
  created?: InputMaybe<QueryFilterStringComparator>;
  editorGroups?: InputMaybe<GroupFilterFields>;
  exists?: InputMaybe<QueryFilterBooleanComparator>;
  fileFilename?: InputMaybe<QueryFilterStringComparator>;
  fileHash?: InputMaybe<QueryFilterStringComparator>;
  fileVariant?: InputMaybe<QueryFilterStringComparator>;
  hashID?: InputMaybe<QueryFilterStringComparator>;
  id?: InputMaybe<QueryFilterIdComparator>;
  lastEdited?: InputMaybe<QueryFilterStringComparator>;
  link?: InputMaybe<QueryFilterStringComparator>;
  name?: InputMaybe<QueryFilterStringComparator>;
  owner?: InputMaybe<MemberFilterFields>;
  ownerID?: InputMaybe<QueryFilterIdComparator>;
  parent?: InputMaybe<FileFilterFields>;
  parentID?: InputMaybe<QueryFilterIdComparator>;
  showInSearch?: InputMaybe<QueryFilterBooleanComparator>;
  title?: InputMaybe<QueryFilterStringComparator>;
  typeAncestry?: InputMaybe<QueryFilterStringComparator>;
  version?: InputMaybe<QueryFilterIntComparator>;
  viewerGroups?: InputMaybe<GroupFilterFields>;
};

export type ImageInterface = {
  absoluteLink?: Maybe<Scalars['String']>;
  backLinks: FileLinkConnection;
  canEditType?: Maybe<CanEditTypeEnum>;
  canViewType?: Maybe<CanViewTypeEnum>;
  className?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  file?: Maybe<DbFileComposite>;
  fileFilename?: Maybe<Scalars['String']>;
  fileHash?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Member>;
  ownerID: Scalars['ID'];
  parent?: Maybe<FileInterface>;
  parentID: Scalars['ID'];
  showInSearch?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  version?: Maybe<Scalars['Int']>;
  viewerGroups: GroupConnection;
};


export type ImageInterfaceAbsoluteLinkArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type ImageInterfaceBackLinksArgs = {
  filter?: InputMaybe<FileLinkFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileLinkSortFields>;
};


export type ImageInterfaceCreatedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type ImageInterfaceEditorGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};


export type ImageInterfaceExistsArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type ImageInterfaceHashIdArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type ImageInterfaceLastEditedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type ImageInterfaceLinkArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type ImageInterfaceTypeAncestryArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type ImageInterfaceViewerGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};

export type ImageInterfaceConnection = {
  __typename?: 'ImageInterfaceConnection';
  edges: Array<ImageInterfaceConnectionEdge>;
  nodes: Array<ImageInterface>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type ImageInterfaceConnectionEdge = {
  __typename?: 'ImageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: ImageInterface;
};

export type ImageSortFields = {
  backLinks?: InputMaybe<FileLinkSortFields>;
  canEditType?: InputMaybe<SortDirection>;
  canViewType?: InputMaybe<SortDirection>;
  className?: InputMaybe<SortDirection>;
  created?: InputMaybe<SortDirection>;
  editorGroups?: InputMaybe<GroupSortFields>;
  fileFilename?: InputMaybe<SortDirection>;
  fileHash?: InputMaybe<SortDirection>;
  fileVariant?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  lastEdited?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  owner?: InputMaybe<MemberSortFields>;
  ownerID?: InputMaybe<SortDirection>;
  parent?: InputMaybe<FileSortFields>;
  parentID?: InputMaybe<SortDirection>;
  showInSearch?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  version?: InputMaybe<SortDirection>;
  viewerGroups?: InputMaybe<GroupSortFields>;
};

export type Member = DataObject & {
  __typename?: 'Member';
  exists: Scalars['Boolean'];
  hashID: Scalars['String'];
  id: Scalars['ID'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type MemberExistsArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MemberHashIdArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type MemberTypeAncestryArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type MemberFilterFields = {
  exists?: InputMaybe<QueryFilterBooleanComparator>;
  hashID?: InputMaybe<QueryFilterStringComparator>;
  id?: InputMaybe<QueryFilterIdComparator>;
  typeAncestry?: InputMaybe<QueryFilterStringComparator>;
};

export type MemberSortFields = {
  id?: InputMaybe<SortDirection>;
};

export type Page = DataObject & PageInterface & SiteTreeInterface & {
  __typename?: 'Page';
  breadcrumbs: Array<PageInterface>;
  canEditType?: Maybe<CanEditTypeEnum>;
  canViewType?: Maybe<CanViewTypeEnum>;
  children: PageInterfaceConnection;
  className?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  extraMeta?: Maybe<Scalars['String']>;
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  menuTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<PageInterface>;
  parent?: Maybe<SiteTreeInterface>;
  parentID: Scalars['ID'];
  showInMenus?: Maybe<Scalars['Boolean']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  urlSegment?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  viewerGroups: GroupConnection;
};


export type PageBreadcrumbsArgs = {
  filter?: InputMaybe<PageFilterFields>;
  sort?: InputMaybe<PageSortFields>;
};


export type PageChildrenArgs = {
  filter?: InputMaybe<PageFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PageSortFields>;
};


export type PageContentArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
  parseShortcodes?: InputMaybe<Scalars['Boolean']>;
};


export type PageCreatedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type PageEditorGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};


export type PageExistsArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type PageExtraMetaArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
  parseShortcodes?: InputMaybe<Scalars['Boolean']>;
};


export type PageHashIdArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type PageLastEditedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type PageLinkArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type PageMetaDescriptionArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type PageNavChildrenArgs = {
  filter?: InputMaybe<PageFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PageSortFields>;
};


export type PageTypeAncestryArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type PageViewerGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};

export type PageFilterFields = {
  breadcrumbs?: InputMaybe<PageFilterFields>;
  canEditType?: InputMaybe<QueryFilterCanEditTypeEnumComparator>;
  canViewType?: InputMaybe<QueryFilterCanViewTypeEnumComparator>;
  children?: InputMaybe<PageFilterFields>;
  className?: InputMaybe<QueryFilterStringComparator>;
  content?: InputMaybe<QueryFilterStringComparator>;
  created?: InputMaybe<QueryFilterStringComparator>;
  editorGroups?: InputMaybe<GroupFilterFields>;
  exists?: InputMaybe<QueryFilterBooleanComparator>;
  extraMeta?: InputMaybe<QueryFilterStringComparator>;
  hashID?: InputMaybe<QueryFilterStringComparator>;
  id?: InputMaybe<QueryFilterIdComparator>;
  lastEdited?: InputMaybe<QueryFilterStringComparator>;
  link?: InputMaybe<QueryFilterStringComparator>;
  menuTitle?: InputMaybe<QueryFilterStringComparator>;
  metaDescription?: InputMaybe<QueryFilterStringComparator>;
  navChildren?: InputMaybe<PageFilterFields>;
  navParent?: InputMaybe<PageFilterFields>;
  parent?: InputMaybe<SiteTreeFilterFields>;
  parentID?: InputMaybe<QueryFilterIdComparator>;
  showInMenus?: InputMaybe<QueryFilterBooleanComparator>;
  showInSearch?: InputMaybe<QueryFilterBooleanComparator>;
  sort?: InputMaybe<QueryFilterIntComparator>;
  title?: InputMaybe<QueryFilterStringComparator>;
  typeAncestry?: InputMaybe<QueryFilterStringComparator>;
  urlSegment?: InputMaybe<QueryFilterStringComparator>;
  version?: InputMaybe<QueryFilterIntComparator>;
  viewerGroups?: InputMaybe<GroupFilterFields>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  totalCount: Scalars['Int'];
};

export type PageInterface = {
  breadcrumbs: Array<PageInterface>;
  canEditType?: Maybe<CanEditTypeEnum>;
  canViewType?: Maybe<CanViewTypeEnum>;
  children: PageInterfaceConnection;
  className?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  extraMeta?: Maybe<Scalars['String']>;
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  menuTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<PageInterface>;
  parent?: Maybe<SiteTreeInterface>;
  parentID: Scalars['ID'];
  showInMenus?: Maybe<Scalars['Boolean']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  urlSegment?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  viewerGroups: GroupConnection;
};


export type PageInterfaceBreadcrumbsArgs = {
  filter?: InputMaybe<PageFilterFields>;
  sort?: InputMaybe<PageSortFields>;
};


export type PageInterfaceChildrenArgs = {
  filter?: InputMaybe<PageFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PageSortFields>;
};


export type PageInterfaceContentArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
  parseShortcodes?: InputMaybe<Scalars['Boolean']>;
};


export type PageInterfaceCreatedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type PageInterfaceEditorGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};


export type PageInterfaceExistsArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type PageInterfaceExtraMetaArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
  parseShortcodes?: InputMaybe<Scalars['Boolean']>;
};


export type PageInterfaceHashIdArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type PageInterfaceLastEditedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type PageInterfaceLinkArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type PageInterfaceMetaDescriptionArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type PageInterfaceNavChildrenArgs = {
  filter?: InputMaybe<PageFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PageSortFields>;
};


export type PageInterfaceTypeAncestryArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type PageInterfaceViewerGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};

export type PageInterfaceConnection = {
  __typename?: 'PageInterfaceConnection';
  edges: Array<PageInterfaceConnectionEdge>;
  nodes: Array<PageInterface>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type PageInterfaceConnectionEdge = {
  __typename?: 'PageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: PageInterface;
};

export type PageSortFields = {
  canEditType?: InputMaybe<SortDirection>;
  canViewType?: InputMaybe<SortDirection>;
  className?: InputMaybe<SortDirection>;
  content?: InputMaybe<SortDirection>;
  created?: InputMaybe<SortDirection>;
  editorGroups?: InputMaybe<GroupSortFields>;
  extraMeta?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  lastEdited?: InputMaybe<SortDirection>;
  menuTitle?: InputMaybe<SortDirection>;
  metaDescription?: InputMaybe<SortDirection>;
  parent?: InputMaybe<SiteTreeSortFields>;
  parentID?: InputMaybe<SortDirection>;
  showInMenus?: InputMaybe<SortDirection>;
  showInSearch?: InputMaybe<SortDirection>;
  sort?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  urlSegment?: InputMaybe<SortDirection>;
  version?: InputMaybe<SortDirection>;
  viewerGroups?: InputMaybe<GroupSortFields>;
};

export enum ParentClassEnum {
  Page = 'Page',
  SilverStripeAssetsFile = 'SilverStripeAssetsFile',
  SilverStripeAssetsFolder = 'SilverStripeAssetsFolder',
  SilverStripeAssetsImage = 'SilverStripeAssetsImage',
  SilverStripeAssetsShortcodesFileLink = 'SilverStripeAssetsShortcodesFileLink',
  SilverStripeCmsModelRedirectorPage = 'SilverStripeCMSModelRedirectorPage',
  SilverStripeCmsModelSiteTree = 'SilverStripeCMSModelSiteTree',
  SilverStripeCmsModelSiteTreeLink = 'SilverStripeCMSModelSiteTreeLink',
  SilverStripeCmsModelVirtualPage = 'SilverStripeCMSModelVirtualPage',
  SilverStripeErrorPageErrorPage = 'SilverStripeErrorPageErrorPage',
  SilverStripeHeadlessModelIncomingWebhook = 'SilverStripeHeadlessModelIncomingWebhook',
  SilverStripeHeadlessModelOutgoingWebhook = 'SilverStripeHeadlessModelOutgoingWebhook',
  SilverStripeHeadlessModelPublishEvent = 'SilverStripeHeadlessModelPublishEvent',
  SilverStripeHeadlessModelPublishQueueItem = 'SilverStripeHeadlessModelPublishQueueItem',
  SilverStripeSecurityGroup = 'SilverStripeSecurityGroup',
  SilverStripeSecurityLoginAttempt = 'SilverStripeSecurityLoginAttempt',
  SilverStripeSecurityMember = 'SilverStripeSecurityMember',
  SilverStripeSecurityMemberPassword = 'SilverStripeSecurityMemberPassword',
  SilverStripeSecurityPermission = 'SilverStripeSecurityPermission',
  SilverStripeSecurityPermissionRole = 'SilverStripeSecurityPermissionRole',
  SilverStripeSecurityPermissionRoleCode = 'SilverStripeSecurityPermissionRoleCode',
  SilverStripeSecurityRememberLoginHash = 'SilverStripeSecurityRememberLoginHash',
  SilverStripeSessionManagerModelsLoginSession = 'SilverStripeSessionManagerModelsLoginSession',
  SilverStripeSiteConfigSiteConfig = 'SilverStripeSiteConfigSiteConfig',
  SilverStripeVersionedChangeSet = 'SilverStripeVersionedChangeSet',
  SilverStripeVersionedChangeSetItem = 'SilverStripeVersionedChangeSetItem',
  SminneeApiKeyMemberApiKey = 'SminneeApiKeyMemberApiKey'
}

export type Query = {
  __typename?: 'Query';
  readFileLinks: FileLinkConnection;
  readFiles: FileInterfaceConnection;
  readFolders: FolderInterfaceConnection;
  readImages: ImageInterfaceConnection;
  readOneFile?: Maybe<FileInterface>;
  readOneFileLink?: Maybe<FileLink>;
  readOneFolder?: Maybe<FolderInterface>;
  readOneImage?: Maybe<ImageInterface>;
  readOnePage?: Maybe<PageInterface>;
  readOneSiteConfig?: Maybe<SiteConfig>;
  readOneSiteTree?: Maybe<SiteTreeInterface>;
  readPages: PageInterfaceConnection;
  readSiteConfigs: SiteConfigConnection;
  readSiteTrees: SiteTreeInterfaceConnection;
};


export type QueryReadFileLinksArgs = {
  filter?: InputMaybe<FileLinkFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileLinkSortFields>;
};


export type QueryReadFilesArgs = {
  filter?: InputMaybe<FileFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileSortFields>;
  versioning?: InputMaybe<VersionedInputType>;
};


export type QueryReadFoldersArgs = {
  filter?: InputMaybe<FolderFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FolderSortFields>;
  versioning?: InputMaybe<VersionedInputType>;
};


export type QueryReadImagesArgs = {
  filter?: InputMaybe<ImageFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ImageSortFields>;
  versioning?: InputMaybe<VersionedInputType>;
};


export type QueryReadOneFileArgs = {
  filter?: InputMaybe<FileFilterFields>;
  sort?: InputMaybe<FileSortFields>;
  versioning?: InputMaybe<VersionedInputType>;
};


export type QueryReadOneFileLinkArgs = {
  filter?: InputMaybe<FileLinkFilterFields>;
  sort?: InputMaybe<FileLinkSortFields>;
};


export type QueryReadOneFolderArgs = {
  filter?: InputMaybe<FolderFilterFields>;
  sort?: InputMaybe<FolderSortFields>;
  versioning?: InputMaybe<VersionedInputType>;
};


export type QueryReadOneImageArgs = {
  filter?: InputMaybe<ImageFilterFields>;
  sort?: InputMaybe<ImageSortFields>;
  versioning?: InputMaybe<VersionedInputType>;
};


export type QueryReadOnePageArgs = {
  filter?: InputMaybe<PageFilterFields>;
  link?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<PageSortFields>;
  versioning?: InputMaybe<VersionedInputType>;
};


export type QueryReadOneSiteConfigArgs = {
  filter?: InputMaybe<SiteConfigFilterFields>;
  sort?: InputMaybe<SiteConfigSortFields>;
};


export type QueryReadOneSiteTreeArgs = {
  filter?: InputMaybe<SiteTreeFilterFields>;
  link?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<SiteTreeSortFields>;
  versioning?: InputMaybe<VersionedInputType>;
};


export type QueryReadPagesArgs = {
  filter?: InputMaybe<PageFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PageSortFields>;
  versioning?: InputMaybe<VersionedInputType>;
};


export type QueryReadSiteConfigsArgs = {
  filter?: InputMaybe<SiteConfigFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteConfigSortFields>;
};


export type QueryReadSiteTreesArgs = {
  filter?: InputMaybe<SiteTreeFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteTreeSortFields>;
  versioning?: InputMaybe<VersionedInputType>;
};

export type QueryFilterBooleanComparator = {
  contains?: InputMaybe<Scalars['Boolean']>;
  endswith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  startswith?: InputMaybe<Scalars['Boolean']>;
};

export type QueryFilterCanEditTypeEnumComparator = {
  contains?: InputMaybe<CanEditTypeEnum>;
  endswith?: InputMaybe<CanEditTypeEnum>;
  eq?: InputMaybe<CanEditTypeEnum>;
  gt?: InputMaybe<CanEditTypeEnum>;
  gte?: InputMaybe<CanEditTypeEnum>;
  in?: InputMaybe<Array<InputMaybe<CanEditTypeEnum>>>;
  lt?: InputMaybe<CanEditTypeEnum>;
  lte?: InputMaybe<CanEditTypeEnum>;
  ne?: InputMaybe<CanEditTypeEnum>;
  startswith?: InputMaybe<CanEditTypeEnum>;
};

export type QueryFilterCanViewTypeEnumComparator = {
  contains?: InputMaybe<CanViewTypeEnum>;
  endswith?: InputMaybe<CanViewTypeEnum>;
  eq?: InputMaybe<CanViewTypeEnum>;
  gt?: InputMaybe<CanViewTypeEnum>;
  gte?: InputMaybe<CanViewTypeEnum>;
  in?: InputMaybe<Array<InputMaybe<CanViewTypeEnum>>>;
  lt?: InputMaybe<CanViewTypeEnum>;
  lte?: InputMaybe<CanViewTypeEnum>;
  ne?: InputMaybe<CanViewTypeEnum>;
  startswith?: InputMaybe<CanViewTypeEnum>;
};

export type QueryFilterIdComparator = {
  contains?: InputMaybe<Scalars['ID']>;
  endswith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  startswith?: InputMaybe<Scalars['ID']>;
};

export type QueryFilterIntComparator = {
  contains?: InputMaybe<Scalars['Int']>;
  endswith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  startswith?: InputMaybe<Scalars['Int']>;
};

export type QueryFilterParentClassEnumComparator = {
  contains?: InputMaybe<ParentClassEnum>;
  endswith?: InputMaybe<ParentClassEnum>;
  eq?: InputMaybe<ParentClassEnum>;
  gt?: InputMaybe<ParentClassEnum>;
  gte?: InputMaybe<ParentClassEnum>;
  in?: InputMaybe<Array<InputMaybe<ParentClassEnum>>>;
  lt?: InputMaybe<ParentClassEnum>;
  lte?: InputMaybe<ParentClassEnum>;
  ne?: InputMaybe<ParentClassEnum>;
  startswith?: InputMaybe<ParentClassEnum>;
};

export type QueryFilterSiteConfigCanEditTypeEnumComparator = {
  contains?: InputMaybe<SiteConfigCanEditTypeEnum>;
  endswith?: InputMaybe<SiteConfigCanEditTypeEnum>;
  eq?: InputMaybe<SiteConfigCanEditTypeEnum>;
  gt?: InputMaybe<SiteConfigCanEditTypeEnum>;
  gte?: InputMaybe<SiteConfigCanEditTypeEnum>;
  in?: InputMaybe<Array<InputMaybe<SiteConfigCanEditTypeEnum>>>;
  lt?: InputMaybe<SiteConfigCanEditTypeEnum>;
  lte?: InputMaybe<SiteConfigCanEditTypeEnum>;
  ne?: InputMaybe<SiteConfigCanEditTypeEnum>;
  startswith?: InputMaybe<SiteConfigCanEditTypeEnum>;
};

export type QueryFilterSiteConfigCanViewTypeEnumComparator = {
  contains?: InputMaybe<SiteConfigCanViewTypeEnum>;
  endswith?: InputMaybe<SiteConfigCanViewTypeEnum>;
  eq?: InputMaybe<SiteConfigCanViewTypeEnum>;
  gt?: InputMaybe<SiteConfigCanViewTypeEnum>;
  gte?: InputMaybe<SiteConfigCanViewTypeEnum>;
  in?: InputMaybe<Array<InputMaybe<SiteConfigCanViewTypeEnum>>>;
  lt?: InputMaybe<SiteConfigCanViewTypeEnum>;
  lte?: InputMaybe<SiteConfigCanViewTypeEnum>;
  ne?: InputMaybe<SiteConfigCanViewTypeEnum>;
  startswith?: InputMaybe<SiteConfigCanViewTypeEnum>;
};

export type QueryFilterStringComparator = {
  contains?: InputMaybe<Scalars['String']>;
  endswith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  startswith?: InputMaybe<Scalars['String']>;
};

export type SiteConfig = DataObject & {
  __typename?: 'SiteConfig';
  canCreateTopLevelType?: Maybe<SiteConfigCanEditTypeEnum>;
  canEditType?: Maybe<SiteConfigCanEditTypeEnum>;
  canViewType?: Maybe<SiteConfigCanViewTypeEnum>;
  className?: Maybe<Scalars['String']>;
  createTopLevelGroups: GroupConnection;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  viewerGroups: GroupConnection;
};


export type SiteConfigCreateTopLevelGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};


export type SiteConfigCreatedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type SiteConfigEditorGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};


export type SiteConfigExistsArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type SiteConfigHashIdArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type SiteConfigLastEditedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type SiteConfigTypeAncestryArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type SiteConfigViewerGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};

export enum SiteConfigCanEditTypeEnum {
  LoggedInUsers = 'LoggedInUsers',
  OnlyTheseUsers = 'OnlyTheseUsers'
}

export enum SiteConfigCanViewTypeEnum {
  Anyone = 'Anyone',
  LoggedInUsers = 'LoggedInUsers',
  OnlyTheseUsers = 'OnlyTheseUsers'
}

export type SiteConfigConnection = {
  __typename?: 'SiteConfigConnection';
  edges: Array<SiteConfigConnectionEdge>;
  nodes: Array<SiteConfig>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type SiteConfigConnectionEdge = {
  __typename?: 'SiteConfigConnectionEdge';
  /** The node at the end of the collections edge */
  node: SiteConfig;
};

export type SiteConfigFilterFields = {
  canCreateTopLevelType?: InputMaybe<QueryFilterSiteConfigCanEditTypeEnumComparator>;
  canEditType?: InputMaybe<QueryFilterSiteConfigCanEditTypeEnumComparator>;
  canViewType?: InputMaybe<QueryFilterSiteConfigCanViewTypeEnumComparator>;
  className?: InputMaybe<QueryFilterStringComparator>;
  createTopLevelGroups?: InputMaybe<GroupFilterFields>;
  created?: InputMaybe<QueryFilterStringComparator>;
  editorGroups?: InputMaybe<GroupFilterFields>;
  exists?: InputMaybe<QueryFilterBooleanComparator>;
  hashID?: InputMaybe<QueryFilterStringComparator>;
  id?: InputMaybe<QueryFilterIdComparator>;
  lastEdited?: InputMaybe<QueryFilterStringComparator>;
  tagline?: InputMaybe<QueryFilterStringComparator>;
  title?: InputMaybe<QueryFilterStringComparator>;
  typeAncestry?: InputMaybe<QueryFilterStringComparator>;
  viewerGroups?: InputMaybe<GroupFilterFields>;
};

export type SiteConfigSortFields = {
  canCreateTopLevelType?: InputMaybe<SortDirection>;
  canEditType?: InputMaybe<SortDirection>;
  canViewType?: InputMaybe<SortDirection>;
  className?: InputMaybe<SortDirection>;
  createTopLevelGroups?: InputMaybe<GroupSortFields>;
  created?: InputMaybe<SortDirection>;
  editorGroups?: InputMaybe<GroupSortFields>;
  id?: InputMaybe<SortDirection>;
  lastEdited?: InputMaybe<SortDirection>;
  tagline?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  viewerGroups?: InputMaybe<GroupSortFields>;
};

export type SiteTree = DataObject & SiteTreeInterface & {
  __typename?: 'SiteTree';
  breadcrumbs: Array<PageInterface>;
  canEditType?: Maybe<CanEditTypeEnum>;
  canViewType?: Maybe<CanViewTypeEnum>;
  children: PageInterfaceConnection;
  className?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  extraMeta?: Maybe<Scalars['String']>;
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  menuTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<PageInterface>;
  parent?: Maybe<SiteTreeInterface>;
  parentID: Scalars['ID'];
  showInMenus?: Maybe<Scalars['Boolean']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  urlSegment?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  viewerGroups: GroupConnection;
};


export type SiteTreeBreadcrumbsArgs = {
  filter?: InputMaybe<PageFilterFields>;
  sort?: InputMaybe<PageSortFields>;
};


export type SiteTreeChildrenArgs = {
  filter?: InputMaybe<PageFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PageSortFields>;
};


export type SiteTreeContentArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
  parseShortcodes?: InputMaybe<Scalars['Boolean']>;
};


export type SiteTreeCreatedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type SiteTreeEditorGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};


export type SiteTreeExistsArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type SiteTreeExtraMetaArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
  parseShortcodes?: InputMaybe<Scalars['Boolean']>;
};


export type SiteTreeHashIdArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type SiteTreeLastEditedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type SiteTreeLinkArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type SiteTreeMetaDescriptionArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type SiteTreeNavChildrenArgs = {
  filter?: InputMaybe<PageFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PageSortFields>;
};


export type SiteTreeTypeAncestryArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type SiteTreeViewerGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};

export type SiteTreeFilterFields = {
  breadcrumbs?: InputMaybe<PageFilterFields>;
  canEditType?: InputMaybe<QueryFilterCanEditTypeEnumComparator>;
  canViewType?: InputMaybe<QueryFilterCanViewTypeEnumComparator>;
  children?: InputMaybe<PageFilterFields>;
  className?: InputMaybe<QueryFilterStringComparator>;
  content?: InputMaybe<QueryFilterStringComparator>;
  created?: InputMaybe<QueryFilterStringComparator>;
  editorGroups?: InputMaybe<GroupFilterFields>;
  exists?: InputMaybe<QueryFilterBooleanComparator>;
  extraMeta?: InputMaybe<QueryFilterStringComparator>;
  hashID?: InputMaybe<QueryFilterStringComparator>;
  id?: InputMaybe<QueryFilterIdComparator>;
  lastEdited?: InputMaybe<QueryFilterStringComparator>;
  link?: InputMaybe<QueryFilterStringComparator>;
  menuTitle?: InputMaybe<QueryFilterStringComparator>;
  metaDescription?: InputMaybe<QueryFilterStringComparator>;
  navChildren?: InputMaybe<PageFilterFields>;
  navParent?: InputMaybe<PageFilterFields>;
  parent?: InputMaybe<SiteTreeFilterFields>;
  parentID?: InputMaybe<QueryFilterIdComparator>;
  showInMenus?: InputMaybe<QueryFilterBooleanComparator>;
  showInSearch?: InputMaybe<QueryFilterBooleanComparator>;
  sort?: InputMaybe<QueryFilterIntComparator>;
  title?: InputMaybe<QueryFilterStringComparator>;
  typeAncestry?: InputMaybe<QueryFilterStringComparator>;
  urlSegment?: InputMaybe<QueryFilterStringComparator>;
  version?: InputMaybe<QueryFilterIntComparator>;
  viewerGroups?: InputMaybe<GroupFilterFields>;
};

export type SiteTreeInterface = {
  breadcrumbs: Array<PageInterface>;
  canEditType?: Maybe<CanEditTypeEnum>;
  canViewType?: Maybe<CanViewTypeEnum>;
  children: PageInterfaceConnection;
  className?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  extraMeta?: Maybe<Scalars['String']>;
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  menuTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<PageInterface>;
  parent?: Maybe<SiteTreeInterface>;
  parentID: Scalars['ID'];
  showInMenus?: Maybe<Scalars['Boolean']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  urlSegment?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  viewerGroups: GroupConnection;
};


export type SiteTreeInterfaceBreadcrumbsArgs = {
  filter?: InputMaybe<PageFilterFields>;
  sort?: InputMaybe<PageSortFields>;
};


export type SiteTreeInterfaceChildrenArgs = {
  filter?: InputMaybe<PageFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PageSortFields>;
};


export type SiteTreeInterfaceContentArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
  parseShortcodes?: InputMaybe<Scalars['Boolean']>;
};


export type SiteTreeInterfaceCreatedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type SiteTreeInterfaceEditorGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};


export type SiteTreeInterfaceExistsArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type SiteTreeInterfaceExtraMetaArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
  parseShortcodes?: InputMaybe<Scalars['Boolean']>;
};


export type SiteTreeInterfaceHashIdArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type SiteTreeInterfaceLastEditedArgs = {
  customFormat?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<DbDatetimeFormattingOption>;
};


export type SiteTreeInterfaceLinkArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type SiteTreeInterfaceMetaDescriptionArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type SiteTreeInterfaceNavChildrenArgs = {
  filter?: InputMaybe<PageFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PageSortFields>;
};


export type SiteTreeInterfaceTypeAncestryArgs = {
  format?: InputMaybe<DbTextFormattingOption>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type SiteTreeInterfaceViewerGroupsArgs = {
  filter?: InputMaybe<GroupFilterFields>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GroupSortFields>;
};

export type SiteTreeInterfaceConnection = {
  __typename?: 'SiteTreeInterfaceConnection';
  edges: Array<SiteTreeInterfaceConnectionEdge>;
  nodes: Array<SiteTreeInterface>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type SiteTreeInterfaceConnectionEdge = {
  __typename?: 'SiteTreeInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: SiteTreeInterface;
};

export type SiteTreeSortFields = {
  canEditType?: InputMaybe<SortDirection>;
  canViewType?: InputMaybe<SortDirection>;
  className?: InputMaybe<SortDirection>;
  content?: InputMaybe<SortDirection>;
  created?: InputMaybe<SortDirection>;
  editorGroups?: InputMaybe<GroupSortFields>;
  extraMeta?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  lastEdited?: InputMaybe<SortDirection>;
  menuTitle?: InputMaybe<SortDirection>;
  metaDescription?: InputMaybe<SortDirection>;
  navParent?: InputMaybe<PageSortFields>;
  parent?: InputMaybe<SiteTreeSortFields>;
  parentID?: InputMaybe<SortDirection>;
  showInMenus?: InputMaybe<SortDirection>;
  showInSearch?: InputMaybe<SortDirection>;
  sort?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
  urlSegment?: InputMaybe<SortDirection>;
  version?: InputMaybe<SortDirection>;
  viewerGroups?: InputMaybe<GroupSortFields>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type VersionedInputType = {
  /** The date to use for archive */
  archiveDate?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<VersionedQueryMode>;
  /** If mode is STATUS, specify which versioned statuses */
  status?: InputMaybe<Array<InputMaybe<VersionedStatus>>>;
  version?: InputMaybe<Scalars['Int']>;
};

/** The versioned mode to use */
export enum VersionedQueryMode {
  /** Reads all versionse */
  AllVersions = 'ALL_VERSIONS',
  /** Read from a specific date of the archive */
  Archive = 'ARCHIVE',
  /** Read from the draft stage */
  Draft = 'DRAFT',
  /** Read the latest version */
  Latest = 'LATEST',
  /** Read from the live stage */
  Live = 'LIVE',
  /** Read only records with a specific status */
  Status = 'STATUS',
  /** Read a specific version */
  Version = 'VERSION'
}

/** The stage to read from or write to */
export enum VersionedStatus {
  /** Only records that have been archived */
  Archived = 'ARCHIVED',
  /** Only draft records */
  Draft = 'DRAFT',
  /** Only records that have unpublished changes */
  Modified = 'MODIFIED',
  /** Only published records */
  Published = 'PUBLISHED'
}

export const PageFieldsFragmentDoc = gql`
    fragment PageFields on Page {
  __typename
  id
  content
  metaDescription
  showInMenus
  showInSearch
  title
  urlSegment
}
    `;
export const AllPageSlugsDocument = gql`
    query AllPageSlugs {
  pages: readPages {
    nodes {
      urlSegment
    }
  }
}
    `;
export const PageBySlugDocument = gql`
    query PageBySlug($slug: String!) {
  page: readOnePage(filter: {urlSegment: {eq: $slug}}) {
    ...PageFields
  }
}
    ${PageFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AllPageSlugs(variables?: AllPageSlugsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllPageSlugsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllPageSlugsQuery>(AllPageSlugsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllPageSlugs', 'query');
    },
    PageBySlug(variables: PageBySlugQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageBySlugQuery>(PageBySlugDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PageBySlug', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export type AllPageSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPageSlugsQuery = { __typename?: 'Query', pages: { __typename?: 'PageInterfaceConnection', nodes: Array<{ __typename?: 'Page', urlSegment?: string | null }> } };

export type PageBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PageBySlugQuery = { __typename?: 'Query', page?: { __typename: 'Page', id: string, content?: string | null, metaDescription?: string | null, showInMenus?: boolean | null, showInSearch?: boolean | null, title?: string | null, urlSegment?: string | null } | null };

export type PageFieldsFragment = { __typename: 'Page', id: string, content?: string | null, metaDescription?: string | null, showInMenus?: boolean | null, showInSearch?: boolean | null, title?: string | null, urlSegment?: string | null };
