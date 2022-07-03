@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <a href="{{ route('permission.create') }}" class="btn btn-success">Add Permission</a>
            <br /><br />
            <table class="border table table-striped table-light">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($permissions as $key => $permission)
                        <tr>
                            <th scope="row">{{ $permission->id }}</th>
                            <td>{{ $permission->permission }}</td>
                            <td> <a href="{{ route('permission.edit' , [$permission->id ]) }}">Edit</a> </td>
                        </tr>
                    @empty
                        <tr>
                            <th colspan="4">1</th>
                        </tr>
                    @endforelse
                </tbody>
            </table>

        </div>
    </div>
</div>
@endsection