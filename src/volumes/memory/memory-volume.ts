import {
  Dirent,
  AnyFS,
  FSWatcher,
  MakeDirectoryOptions,
  PromisesAPI,
  ReadStream,
  Stats,
  Type,
  WriteFileOptions,
  WriteStream
} from '../../node';
import { PathLike } from 'fs';
import { Volume } from 'memfs';
import { Volume as _Volume, TFilePath, TCallback } from 'memfs/lib/volume';

export class MemoryFS implements AnyFS {
  public volume: _Volume = new Volume();
  // @ts-ignore
  readonly promises: PromisesAPI = this.volume.promises;

  access(
    path: PathLike,
    mode: number | undefined,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void;
  access(
    path: PathLike,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void;
  access(
    path: PathLike,
    mode: number | undefined | ((err: NodeJS.ErrnoException | null) => void),
    callback?: (err: NodeJS.ErrnoException | null) => void
  ): void {
    // @ts-ignore
    this.volume.access(path, mode, callback);
  }

  accessSync(path: PathLike, mode?: number): void {
    this.volume.accessSync(path, mode);
  }

  appendFile(
    file: PathLike | number,
    data: any,
    options:
      | { encoding?: string | null; mode?: number | string; flag?: string }
      | string
      | null,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void;

  appendFile(
    file: PathLike | number,
    data: any,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void;

  appendFile(
    file: PathLike | number,
    data: any,
    options: WriteFileOptions | ((err: NodeJS.ErrnoException | null) => void),
    callback?: (err: NodeJS.ErrnoException | null) => void
  ): void {
    // @ts-ignore
    this.volume.appendFile(file, data, options);
  }

  mkdirpSync(path: TFilePath) {
    this.volume.mkdirpSync(path);
  }

  appendFileSync(
    file: PathLike | number,
    data: any,
    options?:
      | { encoding?: string | null; mode?: number | string; flag?: string }
      | string
      | null
  ): void {
    // @ts-ignore
    this.volume.appendFileSync(file, data, options);
  }

  chmod(
    path: PathLike,
    mode: string | number,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void {
    // @ts-ignore
    this.volume.chmod(path, mode, callback);
  }

  chmodSync(path: PathLike, mode: string | number): void {
    this.volume.chmodSync(path, mode);
  }

  chown(
    path: PathLike,
    uid: number,
    gid: number,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void {
    // @ts-ignore
    this.volume.chown(path, uid, gid, callback);
  }

  chownSync(path: PathLike, uid: number, gid: number): void {
    this.volume.chownSync(path, uid, gid);
  }

  close(
    fd: number,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void {
    // @ts-ignore
    this.volume.close(fd, callback);
  }

  closeSync(fd: number): void {
    this.volume.closeSync(fd);
  }

  copyFile(
    src: PathLike,
    dest: PathLike,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void;
  copyFile(
    src: PathLike,
    dest: PathLike,
    flags: number,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void;
  copyFile(
    src: PathLike,
    dest: PathLike,
    callback: ((err: NodeJS.ErrnoException | null) => void) | number
  ): void {
    // @ts-ignore
    this.volume.copyFile(src, dest, callback);
  }

  copyFileSync(src: PathLike, dest: PathLike, flags?: number): void {
    this.volume.copyFileSync(src, dest, flags);
  }

  createReadStream(
    path: PathLike,
    options?:
      | string
      | {
          flags?: string;
          encoding?: string;
          fd?: number;
          mode?: number;
          autoClose?: boolean;
          start?: number;
          end?: number;
          highWaterMark?: number;
        }
  ): ReadStream {
    // @ts-ignore
    return this.volume.createReadStream(path, options);
  }

  createWriteStream(
    path: PathLike,
    options?:
      | string
      | {
          flags?: string;
          encoding?: string;
          fd?: number;
          mode?: number;
          autoClose?: boolean;
          start?: number;
        }
  ): WriteStream {
    return this.volume.createWriteStream(path, options);
  }

  exists(path: PathLike, callback: (exists: boolean) => void): void {
    this.volume.exists(path, callback);
  }

  existsSync(path: PathLike): boolean {
    return false;
  }

  fchmod(
    fd: number,
    mode: string | number,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void {
    // @ts-ignore
    this.volume.fchmod(fd, mode, callback);
  }

  fchmodSync(fd: number, mode: string | number): void {
    this.volume.fchmodSync(fd, mode);
  }

  fchown(
    fd: number,
    uid: number,
    gid: number,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void {
    // @ts-ignore
    this.volume.fchown(fd, uid, gid, callback);
  }

  fchownSync(fd: number, uid: number, gid: number): void {
    this.volume.fchownSync(fd, uid, gid);
  }

  fdatasync(
    fd: number,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void {
    // @ts-ignore
    this.volume.fdatasync(fd, callback);
  }

  fdatasyncSync(fd: number): void {
    this.volume.fdatasyncSync(fd);
  }

  fstat(
    fd: number,
    callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void
  ): void {
    // @ts-ignore
    this.volume.fstat(fd, callback);
  }

  fstatSync(fd: number): Stats {
    return this.volume.fstatSync(fd);
  }

  fsync(
    fd: number,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void {
    // @ts-ignore
    this.volume.fsync(fd, callback);
  }

  fsyncSync(fd: number): void {
    this.volume.fsyncSync(fd);
  }

  ftruncate(
    fd: number,
    len: number | undefined | null,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void;
  ftruncate(
    fd: number,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void;
  ftruncate(
    fd: number,
    len:
      | number
      | undefined
      | null
      | ((err: NodeJS.ErrnoException | null) => void),
    callback?: (err: NodeJS.ErrnoException | null) => void
  ): void {
    // @ts-ignore
    this.volume.ftruncate(fd, len, callback);
  }

  ftruncateSync(fd: number, len?: number | null): void {
    // @ts-ignore
    this.volume.ftruncateSync(fd, len);
  }

  futimes(
    fd: number,
    atime: string | number | Date,
    mtime: string | number | Date,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void {
    // @ts-ignore
    this.volume.futimes(fd, atime, mtime, callback);
  }

  futimesSync(
    fd: number,
    atime: string | number | Date,
    mtime: string | number | Date
  ): void {
    this.volume.futimesSync(fd, atime, mtime);
  }

  lchmod(
    path: PathLike,
    mode: string | number,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void {
    // @ts-ignore
    this.volume.lchmod(path, mode, callback);
  }

  lchmodSync(path: PathLike, mode: string | number): void {
    this.volume.lchmodSync(path, mode);
  }

  lchown(
    path: PathLike,
    uid: number,
    gid: number,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void {
    // @ts-ignore
    this.volume.lchown(path, uid, gid, callback);
  }

  lchownSync(path: PathLike, uid: number, gid: number): void {
    this.volume.lchownSync(path, uid, gid);
  }

  link(
    existingPath: PathLike,
    newPath: PathLike,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void {
    // @ts-ignore
    this.volume.link(existingPath, newPath, callback);
  }

  linkSync(existingPath: PathLike, newPath: PathLike): void {
    this.volume.linkSync(existingPath, newPath);
  }

  lstat(
    path: PathLike,
    callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void
  ): void {
    // @ts-ignore
    this.volume.lstat(path, callback);
  }

  lstatSync(path: PathLike): Stats {
    return this.volume.lstatSync(path);
  }

  mkdir(
    path: PathLike,
    options: number | string | MakeDirectoryOptions | undefined | null,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void;
  mkdir(
    path: PathLike,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void;
  mkdir(
    path: PathLike,
    options:
      | number
      | string
      | MakeDirectoryOptions
      | undefined
      | null
      | ((err: NodeJS.ErrnoException | null) => void),
    callback?: (err: NodeJS.ErrnoException | null) => void
  ): void {
    // @ts-ignore
    this.volume.mkdir(path, options, callback);
  }

  mkdirSync(
    path: PathLike,
    options?: number | string | MakeDirectoryOptions | null
  ): void {
    // @ts-ignore
    this.volume.mkdirSync(path, options);
  }

  mkdtemp(
    prefix: string,
    options:
      | { encoding?: BufferEncoding | null }
      | 'ascii'
      | 'utf8'
      | 'utf-8'
      | 'utf16le'
      | 'ucs2'
      | 'ucs-2'
      | 'base64'
      | 'latin1'
      | 'binary'
      | 'hex'
      | undefined
      | null,
    callback: (err: NodeJS.ErrnoException | null, folder: string) => void
  ): void;
  mkdtemp(
    prefix: string,
    options: 'buffer' | { encoding: 'buffer' },
    callback: (err: NodeJS.ErrnoException | null, folder: Buffer) => void
  ): void;
  mkdtemp(
    prefix: string,
    options: { encoding?: string | null } | string | undefined | null,
    callback: (
      err: NodeJS.ErrnoException | null,
      folder: string | Buffer
    ) => void
  ): void;
  mkdtemp(
    prefix: string,
    callback: (err: NodeJS.ErrnoException | null, folder: string) => void
  ): void;
  mkdtemp(
    prefix: string,
    options:
      | { encoding?: BufferEncoding | null }
      | BufferEncoding
      | undefined
      | null
      | 'buffer'
      | { encoding: 'buffer' }
      | { encoding?: string | null }
      | string
      | ((err: NodeJS.ErrnoException | null, folder: string) => void),
    callback?:
      | ((err: NodeJS.ErrnoException | null, folder: string) => void)
      | ((err: NodeJS.ErrnoException | null, folder: Buffer) => void)
      | ((err: NodeJS.ErrnoException | null, folder: string | Buffer) => void)
  ): void {
    // @ts-ignore
    this.volume.mkdtemp(prefix, options, callback);
  }

  mkdtempSync(
    prefix: string,
    options?:
      | { encoding?: BufferEncoding | null }
      | 'ascii'
      | 'utf8'
      | 'utf-8'
      | 'utf16le'
      | 'ucs2'
      | 'ucs-2'
      | 'base64'
      | 'latin1'
      | 'binary'
      | 'hex'
      | null
  ): string;
  mkdtempSync(
    prefix: string,
    options: { encoding: 'buffer' } | 'buffer'
  ): Buffer;
  mkdtempSync(
    prefix: string,
    options?: { encoding?: string | null } | string | null
  ): string | Buffer;
  mkdtempSync(
    prefix: string,
    options?:
      | { encoding?: BufferEncoding | null }
      | BufferEncoding
      | null
      | { encoding: 'buffer' }
      | 'buffer'
      | { encoding?: string | null }
      | string
  ): string | Buffer {
    // @ts-ignore
    return this.volume.mkdtempSync(prefix, options);
  }

  open(
    path: PathLike,
    flags: string | number,
    mode: string | number | undefined | null,
    callback: (err: NodeJS.ErrnoException | null, fd: number) => void
  ): void;
  open(
    path: PathLike,
    flags: string | number,
    callback: (err: NodeJS.ErrnoException | null, fd: number) => void
  ): void;
  open(
    path: PathLike,
    flags: string | number,
    mode:
      | string
      | number
      | undefined
      | null
      | ((err: NodeJS.ErrnoException | null, fd: number) => void),
    callback?: (err: NodeJS.ErrnoException | null, fd: number) => void
  ): void {
    // @ts-ignore
    this.volume.open(path, flags, mode, callback);
  }

  openSync(
    path: PathLike,
    flags: string | number,
    mode?: string | number | null
  ): number {
    // @ts-ignore
    return this.volume.openSync(path, flags, mode);
  }

  read<TBuffer extends NodeJS.ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    offset: number,
    length: number,
    position: number | null,
    callback: (
      err: NodeJS.ErrnoException | null,
      bytesRead: number,
      buffer: TBuffer
    ) => void
  ): void {
    // @ts-ignore
    this.volume.read(fd, buffer, offset, length, position, callback);
  }

  readFile(
    path: PathLike | number,
    options: { encoding?: null; flag?: string } | undefined | null,
    callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void
  ): void;
  readFile(
    path: PathLike | number,
    options: { encoding: string; flag?: string } | string,
    callback: (err: NodeJS.ErrnoException | null, data: string) => void
  ): void;
  readFile(
    path: PathLike | number,
    options:
      | { encoding?: string | null; flag?: string }
      | string
      | undefined
      | null,
    callback: (err: NodeJS.ErrnoException | null, data: string | Buffer) => void
  ): void;
  readFile(
    path: PathLike | number,
    callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void
  ): void;
  readFile(
    path: PathLike | number,
    options:
      | { encoding?: null; flag?: string }
      | undefined
      | null
      | { encoding: string; flag?: string }
      | string
      | { encoding?: string | null; flag?: string }
      | ((err: NodeJS.ErrnoException | null, data: Buffer) => void),
    callback?:
      | ((err: NodeJS.ErrnoException | null, data: Buffer) => void)
      | ((err: NodeJS.ErrnoException | null, data: string) => void)
      | ((err: NodeJS.ErrnoException | null, data: string | Buffer) => void)
  ): void {}

  readFileSync(
    path: PathLike | number,
    options?: { encoding?: null; flag?: string } | null
  ): Buffer;
  readFileSync(
    path: PathLike | number,
    options: { encoding: string; flag?: string } | string
  ): string;
  readFileSync(
    path: PathLike | number,
    options?: { encoding?: string | null; flag?: string } | string | null
  ): string | Buffer;
  readFileSync(
    path: PathLike,
    options?:
      | { encoding?: null; flag?: string }
      | null
      | { encoding: string; flag?: string }
      | string
      | { encoding?: string | null; flag?: string }
  ): Buffer | string {
    return this.volume.readFileSync(path);
  }

  readSync(
    fd: number,
    buffer: Buffer,
    offset: number,
    length: number,
    position: number | null
  ): number {
    // @ts-ignore
    return this.volume.readSync(fd, buffer, offset, length, position);
  }

  readdir(
    path: PathLike,
    options:
      | { encoding: BufferEncoding | null; withFileTypes?: false }
      | 'ascii'
      | 'utf8'
      | 'utf-8'
      | 'utf16le'
      | 'ucs2'
      | 'ucs-2'
      | 'base64'
      | 'latin1'
      | 'binary'
      | 'hex'
      | undefined
      | null,
    callback: (err: NodeJS.ErrnoException | null, files: string[]) => void
  ): void;
  readdir(
    path: PathLike,
    options: { encoding: 'buffer'; withFileTypes?: false } | 'buffer',
    callback: (err: NodeJS.ErrnoException | null, files: Buffer[]) => void
  ): void;
  readdir(
    path: PathLike,
    options:
      | { encoding?: string | null; withFileTypes?: false }
      | string
      | undefined
      | null,
    callback: (
      err: NodeJS.ErrnoException | null,
      files: string[] | Buffer[]
    ) => void
  ): void;
  readdir(
    path: PathLike,
    callback: (err: NodeJS.ErrnoException | null, files: string[]) => void
  ): void;
  readdir(
    path: PathLike,
    options: { encoding?: string | null; withFileTypes: true },
    callback: (err: NodeJS.ErrnoException | null, files: Dirent[]) => void
  ): void;
  readdir(
    path: PathLike,
    options:
      | { encoding: BufferEncoding | null; withFileTypes?: false }
      | BufferEncoding
      | undefined
      | null
      | { encoding: 'buffer'; withFileTypes?: false }
      | 'buffer'
      | { encoding?: string | null; withFileTypes?: false }
      | string
      | ((err: NodeJS.ErrnoException | null, files: string[]) => void)
      | { encoding?: string | null; withFileTypes: true },
    callback?:
      | ((err: NodeJS.ErrnoException | null, files: string[]) => void)
      | ((err: NodeJS.ErrnoException | null, files: Buffer[]) => void)
      | ((
          err: NodeJS.ErrnoException | null,
          files: string[] | Buffer[]
        ) => void)
      | ((err: NodeJS.ErrnoException | null, files: Dirent[]) => void)
  ): void {
    // @ts-ignore
    this.volume.readdir(path, options, callback);
  }

  readdirSync(
    path: PathLike,
    options?:
      | { encoding: BufferEncoding | null; withFileTypes?: false }
      | 'ascii'
      | 'utf8'
      | 'utf-8'
      | 'utf16le'
      | 'ucs2'
      | 'ucs-2'
      | 'base64'
      | 'latin1'
      | 'binary'
      | 'hex'
      | null
  ): string[];
  readdirSync(
    path: PathLike,
    options: { encoding: 'buffer'; withFileTypes?: false } | 'buffer'
  ): Buffer[];
  readdirSync(
    path: PathLike,
    options?:
      | { encoding?: string | null; withFileTypes?: false }
      | string
      | null
  ): string[] | Buffer[];
  readdirSync(
    path: PathLike,
    options: { encoding?: string | null; withFileTypes: true }
  ): Dirent[];
  readdirSync(
    path: PathLike,
    options?:
      | { encoding: BufferEncoding | null; withFileTypes?: false }
      | BufferEncoding
      | null
      | { encoding: 'buffer'; withFileTypes?: false }
      | 'buffer'
      | { encoding?: string | null; withFileTypes?: false }
      | string
      | { encoding?: string | null; withFileTypes: true }
  ): string[] | Buffer[] | Dirent[] {
    // @ts-ignore
    return this.volume.readdirSync(path, options);
  }

  readlink(
    path: PathLike,
    options:
      | { encoding?: BufferEncoding | null }
      | 'ascii'
      | 'utf8'
      | 'utf-8'
      | 'utf16le'
      | 'ucs2'
      | 'ucs-2'
      | 'base64'
      | 'latin1'
      | 'binary'
      | 'hex'
      | undefined
      | null,
    callback: (err: NodeJS.ErrnoException | null, linkString: string) => void
  ): void;
  readlink(
    path: PathLike,
    options: { encoding: 'buffer' } | 'buffer',
    callback: (err: NodeJS.ErrnoException | null, linkString: Buffer) => void
  ): void;
  readlink(
    path: PathLike,
    options: { encoding?: string | null } | string | undefined | null,
    callback: (
      err: NodeJS.ErrnoException | null,
      linkString: string | Buffer
    ) => void
  ): void;
  readlink(
    path: PathLike,
    callback: (err: NodeJS.ErrnoException | null, linkString: string) => void
  ): void;
  readlink(
    path: PathLike,
    options:
      | { encoding?: BufferEncoding | null }
      | BufferEncoding
      | undefined
      | null
      | { encoding: 'buffer' }
      | 'buffer'
      | { encoding?: string | null }
      | string
      | ((err: NodeJS.ErrnoException | null, linkString: string) => void),
    callback?:
      | ((err: NodeJS.ErrnoException | null, linkString: string) => void)
      | ((err: NodeJS.ErrnoException | null, linkString: Buffer) => void)
      | ((
          err: NodeJS.ErrnoException | null,
          linkString: string | Buffer
        ) => void)
  ): void {
    // @ts-ignore
    this.volume.readlink(path, options, callback);
  }

  readlinkSync(
    path: PathLike,
    options?:
      | { encoding?: BufferEncoding | null }
      | 'ascii'
      | 'utf8'
      | 'utf-8'
      | 'utf16le'
      | 'ucs2'
      | 'ucs-2'
      | 'base64'
      | 'latin1'
      | 'binary'
      | 'hex'
      | null
  ): string;
  readlinkSync(
    path: PathLike,
    options: { encoding: 'buffer' } | 'buffer'
  ): Buffer;
  readlinkSync(
    path: PathLike,
    options?: { encoding?: string | null } | string | null
  ): string | Buffer;
  readlinkSync(
    path: PathLike,
    options?:
      | { encoding?: BufferEncoding | null }
      | BufferEncoding
      | null
      | { encoding: 'buffer' }
      | 'buffer'
      | { encoding?: string | null }
      | string
  ): string | Buffer {
    // @ts-ignore
    return this.volume.readlinkSync(path, options);
  }

  realpath(
    path: PathLike,
    options:
      | { encoding?: BufferEncoding | null }
      | 'ascii'
      | 'utf8'
      | 'utf-8'
      | 'utf16le'
      | 'ucs2'
      | 'ucs-2'
      | 'base64'
      | 'latin1'
      | 'binary'
      | 'hex'
      | undefined
      | null,
    callback: (err: NodeJS.ErrnoException | null, resolvedPath: string) => void
  ): void;
  realpath(
    path: PathLike,
    options: { encoding: 'buffer' } | 'buffer',
    callback: (err: NodeJS.ErrnoException | null, resolvedPath: Buffer) => void
  ): void;
  realpath(
    path: PathLike,
    options: { encoding?: string | null } | string | undefined | null,
    callback: (
      err: NodeJS.ErrnoException | null,
      resolvedPath: string | Buffer
    ) => void
  ): void;
  realpath(
    path: PathLike,
    callback: (err: NodeJS.ErrnoException | null, resolvedPath: string) => void
  ): void;
  realpath(
    path: PathLike,
    options:
      | { encoding?: BufferEncoding | null }
      | BufferEncoding
      | undefined
      | null
      | { encoding: 'buffer' }
      | 'buffer'
      | { encoding?: string | null }
      | string
      | ((err: NodeJS.ErrnoException | null, resolvedPath: string) => void),
    callback?:
      | ((err: NodeJS.ErrnoException | null, resolvedPath: string) => void)
      | ((err: NodeJS.ErrnoException | null, resolvedPath: Buffer) => void)
      | ((
          err: NodeJS.ErrnoException | null,
          resolvedPath: string | Buffer
        ) => void)
  ): void {
    //@ts-ignore
    this.volume.realpath(path, options, callback);
  }

  realpathSync(
    path: PathLike,
    options?:
      | { encoding?: BufferEncoding | null }
      | 'ascii'
      | 'utf8'
      | 'utf-8'
      | 'utf16le'
      | 'ucs2'
      | 'ucs-2'
      | 'base64'
      | 'latin1'
      | 'binary'
      | 'hex'
      | null
  ): string;
  realpathSync(
    path: PathLike,
    options: { encoding: 'buffer' } | 'buffer'
  ): Buffer;
  realpathSync(
    path: PathLike,
    options?: { encoding?: string | null } | string | null
  ): string | Buffer;
  realpathSync(
    path: PathLike,
    options?:
      | { encoding?: BufferEncoding | null }
      | BufferEncoding
      | null
      | { encoding: 'buffer' }
      | 'buffer'
      | { encoding?: string | null }
      | string
  ): string | Buffer {
    // @ts-ignore
    return this.volume.realpathSync(path, options);
  }

  rename(
    oldPath: PathLike,
    newPath: PathLike,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void {
    // @ts-ignore
    this.volume.rename(oldPath, newPath, callback);
  }

  renameSync(oldPath: PathLike, newPath: PathLike): void {
    this.volume.renameSync(oldPath, newPath);
  }

  rmdir(
    path: PathLike,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void {
    // @ts-ignore
    this.volume.rmdir(path, callback);
  }

  rmdirSync(path: PathLike): void {
    this.volume.rmdirSync(path);
  }

  stat(
    path: PathLike,
    callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void
  ): void {
    // @ts-ignore
    this.volume.stat(path, callback);
  }

  statSync(path: PathLike): Stats {
    return this.volume.statSync(path);
  }

  symlink(
    target: PathLike,
    path: PathLike,
    type: 'dir' | 'file' | 'junction' | undefined | null,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void;
  symlink(
    target: PathLike,
    path: PathLike,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void;
  symlink(
    target: PathLike,
    path: PathLike,
    type:
      | Type
      | undefined
      | null
      | ((err: NodeJS.ErrnoException | null) => void),
    callback?: (err: NodeJS.ErrnoException | null) => void
  ): void {
    //@ts-ignore
    this.volume.symlink(target, path, type, callback);
  }

  symlinkSync(
    target: PathLike,
    path: PathLike,
    type?: 'dir' | 'file' | 'junction' | null
  ): void {
    // @ts-ignore
    this.volume.symlinkSync(target, path, type);
  }

  truncate(
    path: PathLike,
    len: number | undefined | null,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void;
  truncate(
    path: PathLike,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void;
  truncate(
    path: PathLike,
    len?:
      | number
      | undefined
      | null
      | ((err: NodeJS.ErrnoException | null) => void),
    callback?: (err: NodeJS.ErrnoException | null) => void
  ): void {
    //@ts-ignore
    this.volume.truncate(path, len, callback);
  }

  truncateSync(path: PathLike, len?: number | null): void {
    // @ts-ignore
    this.volume.truncateSync(path, len);
  }

  unlink(
    path: PathLike,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void {
    // @ts-ignore
    this.volume.unlink(path, callback);
  }

  unlinkSync(path: PathLike): void {
    this.volume.unlinkSync(path);
  }

  unwatchFile(
    filename: PathLike,
    listener?: (curr: Stats, prev: Stats) => void
  ): void {
    // @ts-ignore
    this.volume.unwatchFile(filename, listener);
  }

  utimes(
    path: PathLike,
    atime: string | number | Date,
    mtime: string | number | Date,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void {
    // @ts-ignore
    this.volume.utimes(path, atime, mtime, callback);
  }

  utimesSync(
    path: PathLike,
    atime: string | number | Date,
    mtime: string | number | Date
  ): void {
    this.volume.utimesSync(path, atime, mtime);
  }

  watch(
    filename: PathLike,
    options:
      | {
          encoding?: BufferEncoding | null;
          persistent?: boolean;
          recursive?: boolean;
        }
      | 'ascii'
      | 'utf8'
      | 'utf-8'
      | 'utf16le'
      | 'ucs2'
      | 'ucs-2'
      | 'base64'
      | 'latin1'
      | 'binary'
      | 'hex'
      | undefined
      | null,
    listener?: (event: string, filename: string) => void
  ): FSWatcher;
  watch(
    filename: PathLike,
    options:
      | { encoding: 'buffer'; persistent?: boolean; recursive?: boolean }
      | 'buffer',
    listener?: (event: string, filename: Buffer) => void
  ): FSWatcher;
  watch(
    filename: PathLike,
    options:
      | { encoding?: string | null; persistent?: boolean; recursive?: boolean }
      | string
      | null,
    listener?: (event: string, filename: string | Buffer) => void
  ): FSWatcher;
  watch(
    filename: PathLike,
    listener?: (event: string, filename: string) => any
  ): FSWatcher;
  watch(
    filename: PathLike,
    options?:
      | {
          encoding?: BufferEncoding | null;
          persistent?: boolean;
          recursive?: boolean;
        }
      | BufferEncoding
      | undefined
      | null
      | { encoding: 'buffer'; persistent?: boolean; recursive?: boolean }
      | 'buffer'
      | { encoding?: string | null; persistent?: boolean; recursive?: boolean }
      | string
      | ((event: string, filename: string) => any),
    listener?:
      | ((event: string, filename: string) => void)
      | ((event: string, filename: Buffer) => void)
      | ((event: string, filename: string | Buffer) => void)
  ): FSWatcher {
    // @ts-ignore
    return this.volume.watch(filename, options, listener);
  }

  watchFile(
    filename: PathLike,
    options: { persistent?: boolean; interval?: number } | undefined,
    listener: (curr: Stats, prev: Stats) => void
  ): void;
  watchFile(
    filename: PathLike,
    listener: (curr: Stats, prev: Stats) => void
  ): void;
  watchFile(
    filename: PathLike,
    options:
      | { persistent?: boolean; interval?: number }
      | undefined
      | ((curr: Stats, prev: Stats) => void),
    listener?: (curr: Stats, prev: Stats) => void
  ): void {
    // @ts-ignore
    this.volume.watchFile(filename, options, listener);
  }

  writeFile(
    path: PathLike | number,
    data: any,
    options:
      | { encoding?: string | null; mode?: number | string; flag?: string }
      | string
      | null,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void;
  writeFile(
    path: PathLike | number,
    data: any,
    callback: (err: NodeJS.ErrnoException | null) => void
  ): void;
  writeFile(
    path: PathLike | number,
    data: any,
    options: WriteFileOptions | ((err: NodeJS.ErrnoException | null) => void),
    callback?: (err: NodeJS.ErrnoException | null) => void
  ): void {
    // @ts-ignore
    this.volume.writeFile(path, data, options);
  }

  writeFileSync(
    path: PathLike | number,
    data: any,
    options?:
      | { encoding?: string | null; mode?: number | string; flag?: string }
      | string
      | null
  ): void {
    // @ts-ignore
    this.volume.writeFileSync(path, data, options);
  }

  writeSync(
    fd: number,
    buffer: NodeJS.ArrayBufferView,
    offset?: number | null,
    length?: number | null,
    position?: number | null
  ): number;
  writeSync(
    fd: number,
    string: any,
    position?: number | null,
    encoding?: string | null
  ): number;
  writeSync(
    fd: number,
    buffer: NodeJS.ArrayBufferView | any,
    offset?: number | null,
    length?: number | null | string,
    position?: number | null
  ): number {
    // @ts-ignore
    return this.volume.writeSync(fd, buffer, offset, length, position);
  }

  write<TBuffer extends NodeJS.ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    offset: number | undefined | null,
    length: number | undefined | null,
    position: number | undefined | null,
    callback: (
      err: NodeJS.ErrnoException | null,
      written: number,
      buffer: TBuffer
    ) => void
  ): void;
  write<TBuffer extends NodeJS.ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    offset: number | undefined | null,
    length: number | undefined | null,
    callback: (
      err: NodeJS.ErrnoException | null,
      written: number,
      buffer: TBuffer
    ) => void
  ): void;
  write<TBuffer extends NodeJS.ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    offset: number | undefined | null,
    callback: (
      err: NodeJS.ErrnoException | null,
      written: number,
      buffer: TBuffer
    ) => void
  ): void;
  write<TBuffer extends NodeJS.ArrayBufferView>(
    fd: number,
    buffer: TBuffer,
    callback: (
      err: NodeJS.ErrnoException | null,
      written: number,
      buffer: TBuffer
    ) => void
  ): void;
  write(
    fd: number,
    string: any,
    position: number | undefined | null,
    encoding: string | undefined | null,
    callback: (
      err: NodeJS.ErrnoException | null,
      written: number,
      str: string
    ) => void
  ): void;
  write(
    fd: number,
    string: any,
    position: number | undefined | null,
    callback: (
      err: NodeJS.ErrnoException | null,
      written: number,
      str: string
    ) => void
  ): void;
  write(
    fd: number,
    string: any,
    callback: (
      err: NodeJS.ErrnoException | null,
      written: number,
      str: string
    ) => void
  ): void;
  write(
    fd: number,
    buffer: any,
    offset: any,
    length?: any,
    position?: any,
    callback?: any
  ): void {
    this.write(fd, buffer, offset, length, position, callback);
  }
}
