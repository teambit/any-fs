import { FileHandle, PromisesAPI } from '../../node';
import { Dirent, MakeDirectoryOptions, promises, Stats } from 'fs';
import fs, { PathLike } from 'fs';

export default class FsPromisesAPI implements PromisesAPI {
  access(path: PathLike, mode?: number): Promise<void> {
    return fs.promises.access(path, mode);
  }

  appendFile(
    path: PathLike | FileHandle,
    data: any,
    options?:
      | {
          encoding?: string | null;
          mode?: string | number;
          flag?: string | number;
        }
      | string
      | null
  ): Promise<void> {
    // @ts-ignore
    return fs.promises.appendFile(path, data);
  }

  chmod(path: PathLike, mode: string | number): Promise<void> {
    return fs.promises.chmod(path, mode);
  }

  chown(path: PathLike, uid: number, gid: number): Promise<void> {
    return fs.promises.chown(path, uid, gid);
  }

  copyFile(src: PathLike, dest: PathLike, flags?: number): Promise<void> {
    return fs.promises.copyFile(src, dest, flags);
  }

  fchmod(handle: FileHandle, mode: string | number): Promise<void> {
    // @ts-ignore
    return fs.promises.fchmod(handle, mode);
  }

  fchown(handle: FileHandle, uid: number, gid: number): Promise<void> {
    // @ts-ignore
    return fs.promises.fchown(handle, uid, gid);
  }

  fdatasync(handle: FileHandle): Promise<void> {
    // @ts-ignore
    return fs.promises.fdatasync(handle);
  }

  fstat(handle: FileHandle): Promise<Stats> {
    // @ts-ignore
    return fs.promises.fstat(handle);
  }

  fsync(handle: FileHandle): Promise<void> {
    // @ts-ignore
    return fs.promises.fsync(handle);
  }

  ftruncate(handle: FileHandle, len?: number): Promise<void> {
    // @ts-ignore
    return fs.promises.ftruncate(handle, len);
  }

  futimes(
    handle: FileHandle,
    atime: string | number | Date,
    mtime: string | number | Date
  ): Promise<void> {
    // @ts-ignore
    return fs.promises.futimes(handle, atime, mtime);
  }

  lchmod(path: PathLike, mode: string | number): Promise<void> {
    return fs.promises.lchmod(path, mode);
  }

  lchown(path: PathLike, uid: number, gid: number): Promise<void> {
    return fs.promises.lchown(path, uid, gid);
  }

  link(existingPath: PathLike, newPath: PathLike): Promise<void> {
    return fs.promises.link(existingPath, newPath);
  }

  lstat(path: PathLike): Promise<Stats> {
    return fs.promises.lstat(path);
  }

  mkdir(
    path: PathLike,
    options?: number | string | MakeDirectoryOptions | null
  ): Promise<void> {
    return fs.promises.mkdir(path, options);
  }

  mkdtemp(
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
  ): Promise<string>;
  mkdtemp(
    prefix: string,
    options: { encoding: 'buffer' } | 'buffer'
  ): Promise<Buffer>;
  mkdtemp(
    prefix: string,
    options?: { encoding?: string | null } | string | null
  ): Promise<string | Buffer>;
  mkdtemp(
    prefix: string,
    options?:
      | { encoding?: BufferEncoding | null }
      | BufferEncoding
      | null
      | { encoding: 'buffer' }
      | 'buffer'
      | { encoding?: string | null }
      | string
  ): Promise<string> | Promise<Buffer> | Promise<string | Buffer> {
    return fs.promises.mkdtemp(prefix, options);
  }

  open(
    path: PathLike,
    flags: string | number,
    mode?: string | number
  ): Promise<FileHandle> {
    // @ts-ignore
    return fs.promises.open(path, flags, mode);
  }

  read<TBuffer extends Buffer | Uint8Array>(
    handle: FileHandle,
    buffer: TBuffer,
    offset?: number | null,
    length?: number | null,
    position?: number | null
  ): Promise<{ bytesRead: number; buffer: TBuffer }> {
    // @ts-ignore
    return fs.promises.read(handle, buffer, offset, length, position);
  }

  readFile(
    path: PathLike | FileHandle,
    options?: { encoding?: null; flag?: string | number } | null
  ): Promise<Buffer>;
  readFile(
    path: PathLike | FileHandle,
    options:
      | { encoding: BufferEncoding; flag?: string | number }
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
  ): Promise<string>;
  readFile(
    path: PathLike | FileHandle,
    options?:
      | { encoding?: string | null; flag?: string | number }
      | string
      | null
  ): Promise<string | Buffer>;
  readFile(
    path: PathLike | FileHandle,
    options?:
      | { encoding?: null; flag?: string | number }
      | null
      | { encoding: BufferEncoding; flag?: string | number }
      | BufferEncoding
      | { encoding?: string | null; flag?: string | number }
      | string
  ): Promise<Buffer> | Promise<string> | Promise<string | Buffer> {
    // @ts-ignore
    return fs.promises.readFile(path, options);
  }

  readdir(
    path: PathLike,
    options?:
      | { encoding?: BufferEncoding | null; withFileTypes?: false }
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
  ): Promise<string[]>;
  readdir(
    path: PathLike,
    options: { encoding: 'buffer'; withFileTypes?: false } | 'buffer'
  ): Promise<Buffer[]>;
  readdir(
    path: PathLike,
    options?:
      | { encoding?: string | null; withFileTypes?: false }
      | string
      | null
  ): Promise<string[] | Buffer[]>;
  readdir(
    path: PathLike,
    options: { encoding?: string | null; withFileTypes: true }
  ): Promise<Dirent[]>;
  readdir(
    path: PathLike,
    options?:
      | { encoding?: BufferEncoding | null; withFileTypes?: false }
      | BufferEncoding
      | null
      | { encoding: 'buffer'; withFileTypes?: false }
      | 'buffer'
      | { encoding?: string | null; withFileTypes?: false }
      | string
      | { encoding?: string | null; withFileTypes: true }
  ):
    | Promise<string[]>
    | Promise<Buffer[]>
    | Promise<string[] | Buffer[]>
    | Promise<Dirent[]> {
    // @ts-ignore
    return fs.promises.readdir(path, options);
  }

  readlink(
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
  ): Promise<string>;
  readlink(
    path: PathLike,
    options: { encoding: 'buffer' } | 'buffer'
  ): Promise<Buffer>;
  readlink(
    path: PathLike,
    options?: { encoding?: string | null } | string | null
  ): Promise<string | Buffer>;
  readlink(
    path: PathLike,
    options?:
      | { encoding?: BufferEncoding | null }
      | BufferEncoding
      | null
      | { encoding: 'buffer' }
      | 'buffer'
      | { encoding?: string | null }
      | string
  ): Promise<string> | Promise<Buffer> | Promise<string | Buffer> {
    return fs.promises.readlink(path, options);
  }

  realpath(
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
  ): Promise<string>;
  realpath(
    path: PathLike,
    options: { encoding: 'buffer' } | 'buffer'
  ): Promise<Buffer>;
  realpath(
    path: PathLike,
    options?: { encoding?: string | null } | string | null
  ): Promise<string | Buffer>;
  realpath(
    path: PathLike,
    options?:
      | { encoding?: BufferEncoding | null }
      | BufferEncoding
      | null
      | { encoding: 'buffer' }
      | 'buffer'
      | { encoding?: string | null }
      | string
  ): Promise<string> | Promise<Buffer> | Promise<string | Buffer> {
    return fs.promises.realpath(path, options);
  }

  rename(oldPath: PathLike, newPath: PathLike): Promise<void> {
    return fs.promises.rename(oldPath, newPath);
  }

  rmdir(path: PathLike): Promise<void> {
    return fs.promises.rmdir(path);
  }

  stat(path: PathLike): Promise<Stats> {
    return fs.promises.stat(path);
  }

  symlink(
    target: PathLike,
    path: PathLike,
    type?: string | null
  ): Promise<void> {
    return fs.promises.symlink(target, path, type);
  }

  truncate(path: PathLike, len?: number): Promise<void> {
    return fs.promises.truncate(path, len);
  }

  unlink(path: PathLike): Promise<void> {
    return fs.promises.unlink(path);
  }

  utimes(
    path: PathLike,
    atime: string | number | Date,
    mtime: string | number | Date
  ): Promise<void> {
    return fs.promises.utimes(path, atime, mtime);
  }

  write<TBuffer extends Buffer | Uint8Array>(
    handle: FileHandle,
    buffer: TBuffer,
    offset?: number | null,
    length?: number | null,
    position?: number | null
  ): Promise<{ bytesWritten: number; buffer: TBuffer }>;
  write(
    handle: FileHandle,
    string: any,
    position?: number | null,
    encoding?: string | null
  ): Promise<{ bytesWritten: number; buffer: string }>;
  write(
    handle: FileHandle,
    buffer: any,
    offset?: number | null,
    length?: number | null | string,
    position?: number | null
  ): any {
    // @ts-ignore
    fs.promises.write(handle, buffer, offset, length);
  }

  writeFile(
    path: PathLike | FileHandle,
    data: any,
    options?:
      | {
          encoding?: string | null;
          mode?: string | number;
          flag?: string | number;
        }
      | string
      | null
  ): Promise<void> {
    // @ts-ignore
    return fs.promises.writeFile(path, data, options);
  }
}
